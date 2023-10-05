/// <reference types="cypress" />

describe('SuperDomain',()=>{

    it('',()=>{
        cy.visit('https://www.amazon.com/')
        cy.wait(3000)
    })
    
    it('',()=>{
    
        cy.visit('https://www.google.com/')
        cy.visit('https://www.amazon.com/')
        //ayni domain icerisindeki 2. sayfalara gidilebilir super domain deniyor
        
        //farkli domain lere eskiden gidilemiyormuş ama düzeltilmiş şimdi gidilebiliyor
    })
    
    

    
    
    
    })