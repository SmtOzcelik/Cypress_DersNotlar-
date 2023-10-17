/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('US016:ViceDean, kullanıcıların gönderdiği mesajları görebilmelidir',()=>{

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
          
       
        const contactUrl='https://managementonschools.com/app/contactMessages/getAll'
        cy.then(()=>{
            cy.request({
                url:contactUrl,
                method:'GET',
                headers: {Authorization: authToken}
            }).then((response)=>{
                console.log(response)
                expect(response.status).to.equal(200)
                expect(response.body.content.lenght).to.not.equal(0)

            })
        })

        
        })


        
    
    })
    
   
    
    
    
    
    
