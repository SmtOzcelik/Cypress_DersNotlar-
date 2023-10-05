/// <reference types="cypress" />

describe('DropDown',()=>{

    it('Test Case',()=>{
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        cy.get('#dropdown').select('Option 1').should('have.value','1')
        //burdaki have.value lacate satırında value="1" gördük kullandik
        
        cy.get('#dropdown').select('Option 2').should('have.value','2')

        
    
    
    })
    
    
    
    
    })