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

        //--Dogrulama işlemleri--
        //1) have.text 
        cy.get('.d-grid > .fw-semibold').should('have.text','Login') // have.text de aynısı dogula
        cy.get('.card-body > .shadow-sm').should('have.text','Login')
        //locate edilen yerdeki metinde 'Login' varmı ? Text olmak zorunda

        //2) cy.url().should()
        cy.url().should('include','login')

        //3) be.visble
        cy.get('.card-body > .shadow-sm').should('be.visible')
        // bu locate yeri görünüyor mu?

        //4) include.text
        cy.get('.card-body > .shadow-sm').should('include.text','Login')
        //locade edilen yerdeki metin 'Login' içeriyor mu?j

        //--Toplam Link sayısı--
        // li ile baslayan tagı a olan 
        cy.get('li a').should('have.length',19)

        

        




    
    })
    
   
    
    
    
    })