/// <reference types="cypress" />

describe('Login Test',()=>{

    it('Pozitif Test',()=>{

        const username="AdminSamet"
        const password="Ab142790"

        cy.visit('https://managementonschools.com/')
        cy.contains('Login').click()
        cy.get('#username').type(username).should('have.value',username)
        cy.get('#password').type(password).should('not.be.null')
        cy.get('.d-grid > .fw-semibold').click()

        //giriş yapıldığını dogrulayalım
       cy.contains('Menu').should('have.text','Menu')
       //have.text her zaman olmayabiliyor html olarak gelebilir cevap
       cy.get('.mt-3 > .fw-bold').should('be.visible')
       cy.get('.mx-auto > .fw-semibold').should('contain','Submit')

    })
    



    it('Negatif Test',()=>{

        cy.visit('https://managementonschools.com/')
        cy.contains('Login').click()
        
        const username="AdminSamet"
        const password="Ab000000" // yanlış password

        cy.get('#username').type(username).should('have.value',username)
        cy.get('#password').type(password).should('not.be.null')
        cy.get('.d-grid > .fw-semibold').click()
        
        cy.contains('Menu').should('not.be.visible')
        // Menu nun gözükmediğini dogruladik

        cy.get('.d-grid > .fw-semibold').should('be.visible')
        // Loginin gözüktügünü dogruladık
       
    })
    
    
    
    
    })