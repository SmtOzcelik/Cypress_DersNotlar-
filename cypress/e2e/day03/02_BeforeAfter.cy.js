/// <reference types="cypress" />

describe('Before After',()=>{
    before( () =>{                  //seleniumdaki beforeClass gibi
        cy.log('Her test dosyasından önce bir kere çalişacak')
    })

    after( () =>{                   //seleniumdaki afterClass gibi
        cy.log('Her test dosyasından sonra bir kere çalışır')
    })

    beforeEach( () =>{
        cy.log('her testten önce bir kere çalışacak')
    })

    afterEach( () =>{
        cy.log('Her testten sonra çalışacak')
    })

    it('Test Case 1',()=>{
        cy.log('Test Case 1')
    
    })
    
    it('Test Case 2',()=>{
        cy.log('Test Case 2')
        
    })
    
    
    
    
    
    })