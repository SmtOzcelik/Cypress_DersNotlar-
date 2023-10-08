/// <reference types="cypress" />

    const requestUrl='https://dummy.restapiexample.com/api/v1/delete/2'

 describe('Delete',()=>{

    it('Test 01',()=>{

        cy.request('DELETE',requestUrl).then((response)=>{

            expect(response.body.status).to.eq("succes")
            expect(response.body.message).to.eq("Successfully! Record has been deleted")
        })
    
    
    })
    
    
    
    
    })