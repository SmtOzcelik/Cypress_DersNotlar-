/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('US13:Vice Dean öğretmen oluşturabilmelidir',()=>{

    it('TC01 API pozitif test',()=>{
        
        const tokenUrl='https://managementonschools.com/app/auth/login'
        const username='ViceDeanTeam11'
        const password='Aa123456'
        const requestBody={username:username,password:password}
        let authToken
        cy.request({
            method:'POST',
            url:tokenUrl,
            body:requestBody,
        }).then((response)=>{
            expect(response.status).to.equal(200)
            authToken=response.body.token
        }) 
         // ÖNEMLİ aşağıdaki işleme devam etmek token i kullanmak icin üstteki request icinde devam edilecek    
       
        const teacherUrl='https://managementonschools.com/app/teachers/save'
        // phoneNumber,ssn,username unique olması icin faker kullandık
        function fakerPhone() {
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`;
          }
          const fakerPhonenumber=fakerPhone()

          function fakerSsn() {
            const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
          }
          const fakerssn=fakerSsn()
          
          const fakerUsername=faker.name.firstName()
          const fakerEmail=faker.internet.email()
        cy.then(()=>{
            cy.request({
                url:teacherUrl,
                method:'POST',                
                headers: {Authorization: authToken},   
                body:  {
                    "birthDay": "2000-10-10",
                    "birthPlace": "Karaman",
                    "email": fakerEmail,
                    "gender": "MALE",
                    "isAdvisorTeacher": "true",
                    "lessonsIdList": [
                      "2","5"
                    ],
                    "name": "samet",
                    "password": "Ab142700",
                    "phoneNumber": fakerPhonenumber,
                    "ssn": fakerssn,
                    "surname": "Tan",
                    "username": fakerUsername
                  }
            }).then((response)=>{
                console.log(response)
                expect(response.body.message).to.equal('Teacher saved successfully')
                expect(response.status).to.equal(200)
                expect(response.body.object.name).to.equal('samet')
                expect(response.body.object.surname).to.equal('Tan')
                expect(response.body.object.ssn).to.equal(fakerssn)
                expect(response.body.object.phoneNumber).to.equal(fakerPhonenumber)               

            })
            
        })

        
        })


        
    
    })
    
   