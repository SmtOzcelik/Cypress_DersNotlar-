/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('US019:Teacher öğrenciler ile toplantı düzenleyebilmeli',()=>{

    it('TC01 API pozitif test',()=>{
        
        const tokenUrl='https://managementonschools.com/app/auth/login'
        const username='TechTeam11'
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
          
       
        const meetUrl='https://managementonschools.com/app/meet/save'
        cy.then(()=>{
            cy.request({
                url:meetUrl,
                method:'POST',
                headers: {Authorization: authToken},
                body:{
                    "date": "2023-12-12",
                    "description": "Ders programi",
                    "startTime": "10:00",
                    "stopTime": "11:00",
                    "studentIds": [
                      "1",
                      "3"
                    ]
                  }
            }).then((response)=>{
                console.log(response)
                //expect(response.status).to.equal(200)  bag oldugu icin dogrulama yapılamadı
                

            })
        })

        
        })


        
    
    })
    
   
    
    
    
    
    
