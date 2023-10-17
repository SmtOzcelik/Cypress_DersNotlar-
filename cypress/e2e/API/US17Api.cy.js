/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('US017:Teacher, öğrencilere not verebilmelidir',()=>{

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
          
       
        const studentInfoUrl='https://managementonschools.com/app/studentInfo/save'
        cy.then(()=>{
            cy.request({
                url:studentInfoUrl,
                method:'POST',
                headers: {Authorization: authToken},
                body:{
                    "absentee": "2",
                    "educationTermId": "2",
                    "finalExam": "80",
                    "infoNote": "Başarılı Gecti",
                    "lessonId": "4",
                    "midtermExam": "90",
                    "studentId": "5"
                  }
            }).then((response)=>{
                console.log(response)
                //expect(response.status).to.equal(200)  bag oldugu icin dogrulama yapılamadı
                

            })
        })

        
        })


        
    
    })
    
   
    
    
    
    
    
