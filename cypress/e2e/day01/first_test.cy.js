/// <reference types="cypress" />

describe('My First Test',()=>{
// describe : tanımlamak demek.Testi tanımlıyorum
// describe ve it mocha dan geliyor

    it('URL TEST',()=>{
    
    cy.visit('https://www.google.com/')
    // visit(URL) : URL ye git

    cy.url().should('include', 'google')
    // should assert işlemi için kullanilir
    //include: içermek demek
    //should('include', 'google'): URL google içerir mi ?

    })
    


    it('Title Test',()=>{
    
    cy.visit('https://www.google.com/')
    cy.title().should('include','Google')
    // title(): sayfanin title ını alir

    cy.title().should('eq','Google')


        
    })
    
    
    })