/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('US15:Vice Dean, öğrenci oluşturabilmelidir.',()=>{

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
       
        const studentUrl='https://managementonschools.com/app/students/save'
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
                url:studentUrl,
                method:'POST',                
                headers: {Authorization: authToken},   
                body:  {
                    "advisorTeacherId": "2",
                    "birthDay": "2000-10-10",
                    "birthPlace": "Karaman",
                    "email": fakerEmail,
                    "fatherName": "Salim",
                    "gender": "MALE",
                    "motherName": "Seda",
                    "name": "Samet",
                    "password": "Ab142700",
                    "phoneNumber": fakerPhonenumber,
                    "ssn": fakerssn,
                    "surname": "Ozcelik",
                    "username": fakerUsername
                  }
            }).then((response)=>{
                console.log(response)
                expect(response.body.message).to.equal('Student saved Successfully')
                expect(response.status).to.equal(200)
                expect(response.body.object.name).to.equal('Samet')
                expect(response.body.object.surname).to.equal('Ozcelik')
                expect(response.body.object.ssn).to.equal(fakerssn)
                expect(response.body.object.phoneNumber).to.equal(fakerPhonenumber)               

            })
            
        })

        
        })


        
    
    })
    
   