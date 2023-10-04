/// <reference types="cypress" />

describe('Managementonscohool',()=>{

    it('Login Test 1',()=>{
    
        cy.visit('https://managementonschools.com/')
        // selenium daki get

        // 1 yol login  tik yap
        //cy.get('.col-sm-2 > .ms-2').click()
        
        // 2 .yol contain metodu kullanmak textler icin geçerli
        cy.contains(' Login').click()

       
       cy.get('#username').type('AdminSamet').should('have.value','AdminSamet')

       cy.get('#password').type('Ab142790').should('not.be.null')

       cy.get('.d-grid > .fw-semibold').click()


       //giriş yapıldığını dogrulayalım
       cy.contains('Menu').should('have.text','Menu')
       cy.contains('AdminSamet').should('have.text','AdminSamet')
       

    })
    
    
    
    
    })