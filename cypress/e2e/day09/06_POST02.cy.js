/// <reference types="cypress" />

describe('POST 02',()=>{

        const requestUrl="https://dummy.restapiexample.com/api/v1/create"
    it('Test 1.yol',()=>{
        cy.request('POST',requestUrl,{
            "name":"Cypress",           // burdaki body yi sitesinden aldık
            "salary":"200",
            "age":"35"
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.status).to.equal("success")
            expect(response.body.data.name).to.eq("Cypress")

        })

        // 1 ve 2 arasındaki fark gönderim şekli

        it('Test 2.yol',()=>{
            const bodyRequest=	{"name":"Cypres","salary":"300","age":"30"}

            cy.request({
                url:requestUrl,
                method:'POST',
                body:bodyRequest
            }).then(response=>{

            expect(response.status).to.eq(200)
            expect(response.body.status).to.equal("success")
            expect(response.body.data.name).to.eq("Cypress")
            })

    
        })
    
    })
    
   
    
    
    
    
    })