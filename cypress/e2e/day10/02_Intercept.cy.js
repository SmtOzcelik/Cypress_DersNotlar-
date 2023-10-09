/// <reference types="cypress" />

describe('Intercept',()=>{

    it('Test',()=>{
        cy.visit('https://example.cypress.io/commands/waiting')
        
        //cy.intercept('GET','**/comments/*').as('getComment')   url yi icinde şu olan diye kısaltıbiliriz
        //bu url yi incle kısmından network aç sonra sayfada get tik yap oraya düşecek
        cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1').as('getComment')
        //Networku dinle
        // as -> daha sonra @ işareti ile kullanmak üzere değişken atıyor
        //@getComment 
        
        cy.get('.network-btn').click()

        cy.wait('@getComment').its('response').then((response)=>{
            console.log(response)

            assert.equal(response.statusCode,200,'Status Code Control')
        })

    })
 
    
    
    })