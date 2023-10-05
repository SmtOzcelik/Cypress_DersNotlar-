/// <reference types="cypress" />

describe('Suggested Elements',()=>{

    it('TestCase 1',()=>{
        cy.visit('https://www.google.com')
        cy.get('.gLFyf').type('Yahoo')
        cy.get('li span b').contains('mail').click()
        /* Burdaki mevzu arama yerine istenileni yazdıktan sonra
        neler cıkıyor 8 tane mesela bunların hepsi
        li
        span
        b
        taglarında bu sıralamada 
        sonra içlerinden mail olanı bul tik yap beni yahoo mail e götür

        */
    })
    
   
    
    
    })