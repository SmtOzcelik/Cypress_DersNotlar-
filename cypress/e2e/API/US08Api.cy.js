/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('US08:Vice Dean ders oluşturabilmelidir',()=>{

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
       
        const contactUrl='https://managementonschools.com/app/lessons/save'
        const lesson=faker.lorem.words(1)
        cy.then(()=>{
            cy.request({
                url:contactUrl,
                method:'POST',
                body:{
                    "compulsory": "true",
                    "creditScore": "12",
                    "lessonName": lesson
                  },
                headers: {Authorization: authToken}
            }).then((response)=>{
                console.log(response)
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal('Lesson Created')
                expect(response.body.object.lessonName).to.equal(lesson)
                expect(response.body.object.creditScore).to.equal(12)
                expect(response.body.object.compulsory).to.equal(true)
                

            })
        })

        
        })


        
    
    })
    
   
    
    
    
    
    
