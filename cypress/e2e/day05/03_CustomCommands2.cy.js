/// <reference types="cypress" />

describe('Custon Command2',()=>{

    it('Amazon Search',()=>{
        cy.amazonSearch('iphone')
        cy.get('.a-color-state').should('include.text','iphone')
        cy.get('div').contains('iphone').should('include.text','iphone')

        //cy.screenshot()
    
    })
    
    
    
    
    })