/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('US01:Aday öğrenciler sisteme kayıt olabilmelidir',()=>{

    it('TC01 Pozitif API test',()=>{

       
        const urlPost ='https://managementonschools.com/app/guestUser/register'
        
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

        const registerBody={
            "birthDay": "2000-10-10",
            "birthPlace": "Karaman",
            "gender": "MALE",
            "name": "Samet",
            "password": "Ab142700",
            "phoneNumber": fakerPhonenumber,
            "ssn": fakerssn,
            "surname": "Ozcelik",
            "username": fakerUsername
          }
    
    cy.request({              //bu post işleminde şifre token olmadan yapılabildiği icin token ve auth yok
        url:urlPost,
        method:'POST',
        body:registerBody
    }).then((response)=>{
        console.log(response)
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Guest User registered.')
        expect(response.body.object.birthDay).to.equal('2000-10-10')
        expect(response.body.object.birthPlace).to.equal('Karaman')
        expect(response.body.object.gender).to.equal('MALE')
        expect(response.body.object.name).to.equal('Samet')
        expect(response.body.object.surname).to.equal('Ozcelik')
        expect(response.body.object.phoneNumber).to.equal(fakerPhonenumber)
        expect(response.body.object.ssn).to.equal(fakerssn)
        expect(response.body.object.username).to.equal(fakerUsername)
        
    })  })
    
    
    
    })