/// <reference types="cypress" />

describe('Automation Practive',()=>{

it('Automation Practive Login Test',()=>{

    cy.visit('http://www.automationpractice.pl/index.php')
    cy.get('.login').click()
    cy.get('#email').type('smtab142790@gmail.com')
    cy.get('#passwd').type('Ab142790')
    cy.get('#SubmitLogin > span').click()

    cy.get('.account > span').should('include.text','Samet')
    cy.get('.account > span').should('include.text','ozcelik')
    cy.get('.logout').should('be.visible')

})







})