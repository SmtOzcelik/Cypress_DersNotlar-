/// <reference types="cypress" />

context('My Second Test',()=>{
//describe yerine context kullanabiliriz

beforeEach('Her Testten once calisacak',()=>{
    cy.visit('/')


})
    it('url test',()=>{
    cy.url().should('include','google')
    cy.url().should('eq','https://www.google.com/')
    
    })
    
    it('Title test',()=>{
    cy.title().should('include','Google')
    cy.title().should('equal','Google')

        
    })
    


    it('Search Test',()=>{
        cy.get('#APjFqb').type('nutella{enter}')
        //get() locate oluyor burda get içini otamatik aldik manuel aşağıdaki gibi
        //cy.get("input[name='q']").type('nutella{enter}')
        //type() metin gönderiyoruz
        // {enter} ENTER tuşuna basıyoruz
       
        
    })
    
    it('click',()=>{
        cy.get('.gb_Hd').click()
        
        
    })


    it('',()=>{
    
        
    })
    

    })