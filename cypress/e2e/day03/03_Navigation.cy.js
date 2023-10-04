/// <reference types="cypress" />

describe('Navigation',()=>{

    it('Back,Forward,Refresh',()=>{
    
    cy.visit('http://www.automationpractice.pl/index.php')

    cy.wait(3000)

    cy.get('.login').click()

    cy.wait(3000)

    cy.go('back')  //cy.go(-1) aynı işi yapar

    cy.wait(3000)

    cy.go('forward')

    cy.wait(3000)

    cy.reload() // reflesh yapma
    
    })
    
    it.only('Chaing Navigation',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.wait(3000)
    
        cy.get('.login').click()

        cy.wait(3000)

        cy.go('back').go('forward').go(-1).go(+1)

        cy.reload(true) 
        //cy.reload(true) sayfayi hafızadan değil yeniden yükler
        //güncellenmiş temizlenmiş hali ile yükler 
        
    })
    
    
    
    
    })