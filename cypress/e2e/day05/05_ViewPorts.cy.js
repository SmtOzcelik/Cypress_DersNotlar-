/// <reference types="cypress" />

describe('ViewPorts',()=>{

    it('iphone-8',()=>{
    
        cy.visit('https://www.amazon.com')
        cy.viewport('iphone-8')
    
    })
    
    
    it('macbook-16',()=>{
    
        cy.visit('https://www.amazon.com')
        cy.viewport('macbook-16')
    })
    
    
    it('Custum Screen',()=>{
    
        cy.visit('https://www.amazon.com')
        cy.viewport(3000,2500) //kendimiz degerlerini vererek ekran boyutunu ayarladık
    
    })
    
    
    })