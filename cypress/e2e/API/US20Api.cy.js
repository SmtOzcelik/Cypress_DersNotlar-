/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('US020:Teacher, toplantıları görebilmeli ve silebilmelidir.',()=>{

    it('TC01 API pozitif test(toplantılar görebilmeli)',()=>{
        
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
          
       
        const meetUrl='https://managementonschools.com/app/meet/getAll'
        cy.then(()=>{
            cy.request({
                url:meetUrl,
                method:'GET',
                headers: {Authorization: authToken},
                
            }).then((response)=>{
                console.log(response)
                expect(response.status).to.equal(200) 
                

            })
        })

        
        })

        it('TC01 API pozitif test(toplantıları silebilmeli)',()=>{
        
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
              
           
            const meetDeleteUrl='https://managementonschools.com/app/meet/delete/473'
            cy.then(()=>{
                cy.request({
                    url:meetDeleteUrl,
                    method:'DELETE',
                    headers: {Authorization: authToken},
                    
                }).then((response)=>{
                    console.log(response)
                    //expect(response.status).to.equal(200) 
                    
    
                })
            })
    
            
            })
        
    
    })
    
   
    
    
    
    
    
