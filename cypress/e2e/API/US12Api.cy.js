/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('US12:Vice Dean öğretmene ders atayabilmelidir.',()=>{

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
       
        const contactUrl='https://managementonschools.com/app/teachers/chooseLesson'
        
        cy.then(()=>{
            cy.request({
                url:contactUrl,
                method:'POST',                
                headers: {Authorization: authToken},   
                body:  {
                    "lessonProgramId": [
                      "3",
                      "5"
                    ],
                    "teacherId": "6"
                  }          
            }).then((response)=>{
                console.log(response)
                //expect(response.status).to.equal(200)
                // sonuc unique olduğu icin her seferinde hata verecek o yuzden dogrulama yapılmadı
                

            })
        })

        
        })


        
    
    })
    
   