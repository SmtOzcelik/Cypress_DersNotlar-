/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('US04:Admin Dean ekleyebilmeli',()=>{

    it('TC01 API pozitif test',()=>{
        
        const tokenUrl='https://managementonschools.com/app/auth/login'
        const username='AdminSamet'
        const password='Ab142790'
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

          
        const urlDeanPost='https://managementonschools.com/app/dean/save'     
        
        cy.then(()=>{
            cy.request({
                method:'POST',
                url:urlDeanPost,
                headers: {
                    Authorization: authToken, 
                  },
                body:{
                    "birthDay": "2000-10-10",
                    "birthPlace": "Karaman",
                    "gender": "MALE",
                    "name": "Samet",
                    "password": "Ab142700",
                    "phoneNumber": fakerPhonenumber,
                    "ssn": fakerssn,
                    "surname": "Ozcelik",
                    "username": fakerUsername
                  },
                  //auth:{"username":"AdminSamet","password":"Ab142790"}  



            }).then((response)=>{
                console.log(response)
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal('Dean Saved')
                expect(response.body.object.birthDay).to.equal('2000-10-10')
                expect(response.body.object.birthPlace).to.equal('Karaman')
                expect(response.body.object.gender).to.equal('MALE')
                expect(response.body.object.name).to.equal('Samet')
                expect(response.body.object.surname).to.equal('Ozcelik')
                expect(response.body.object.phoneNumber).to.equal(fakerPhonenumber)
                expect(response.body.object.ssn).to.equal(fakerssn)
                expect(response.body.object.username).to.equal(fakerUsername)
    
                
                
            })
        })


        
    
    })
    
   
    
    
    
    
    
})