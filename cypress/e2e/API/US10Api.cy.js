/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('US10:Vice Dean ders programı oluşturabilmelidir',()=>{

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
       
        const contactUrl='https://managementonschools.com/app/lessonPrograms/save'
        
        cy.then(()=>{
            cy.request({
                url:contactUrl,
                method:'POST',                
                headers: {Authorization: authToken},
                body:{
                    "day": "MONDAY",
                    "educationTermId": "1",
                    "lessonIdList": [
                      "1",
                      "3"
                    ],
                    "startTime": "10:00",
                    "stopTime": "12:00"
                  }
            }).then((response)=>{
                console.log(response)
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal('Created Lesson Program')
                expect(response.body.object.startTime).to.equal('10:00:00')
                expect(response.body.object.stopTime).to.equal('12:00:00')

            })
        })

        
        })


        
    
    })
    
   
    
    
    
    
    
