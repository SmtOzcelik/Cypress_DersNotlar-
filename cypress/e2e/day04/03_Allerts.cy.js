/// <reference types="cypress" />

describe('Allerts',()=>{

    it('Allert Test',()=>{
    
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(1000)
        cy.get(':nth-child(1) > button').click()

        //Cypress otomatik olarak Allert tamam butonuna tıklar

        cy.get('#result').should('include.text','You successfully clicked an alert')
    
    })
    
    it('Accept Alert Test',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(1000)
        cy.get(':nth-child(2) > button').click()
        //2 seçenek var. iptal ve tamam
        //cypress otomatik olarak tamam butonuna tıklayacak
        
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    
    
    it('Dismiss Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(1000)
        cy.get(':nth-child(2) > button').click()
        //Cypress otomatik olarak tamam butonuna tıkladı

        /*
        on() -> jQuery bir fonsiyondur.
        browserda açılan pencereleirin kontrolu icin kullanilir
        */

        cy.on('window:confirm', ()=>{
            return false
            //return true -> default olarak tıkla demek
        })

        cy.get('#result').should('have.text','You clicked: Cancel')
            
    })
    
    it('Allert Text',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(1000)

        cy.window()  //pop up pencereleri kontrol ediyoruz
        .then(($windowsElement) => {  // ($windowsElement) promt a bilgi girer
            cy.stub($windowsElement,'prompt').returns('Cypress')
        })
        cy.get(':nth-child(3) > button').click()
        
        cy.get('#result').should('have.text','You entered: Cypress')
            
    })

    it.only('',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(1000)
        cy.get(':nth-child(2) > button').click()

        cy.on('window:alert',(message)=>{
            cy.should(message,'')
        })
        
    })
    
    })