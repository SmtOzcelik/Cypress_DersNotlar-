/// <reference types="cypress" />

describe('Managementonscohool',()=>{

    it('Login Test 2',()=>{
        cy.visit('https://managementonschools.com/')

        // 1 yol contains('Text')
        //cy.contains('Login').click()
        //cy.contains('login',{matchCase:false}).click() //harf duyarliligi yok
        
        
        // 2 .yol contains('Locator','Text') 
        //cy.get('.col-sm-2 > .ms-2',' Login').click() // otomatik oluşturulan locate
        //cy.contains('[class="header_link ms-2"]','Login') //manuel locate
        //cy.contains('a','Login').click() //tagi a olan ve icinde Login olan
        cy.contains('a','login',{matchCase:false}).click()


    
    })
    
   
    
    
    
    })