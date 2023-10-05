/// <reference types="cypress" />

describe('SuggestedElements2',()=>{
    //Bu test de search box da bi kelime arattığımızda istenileni verip vermediğinin
    // test yapılış yöntemi 

    it('Test Case',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('#search_query_top').type('dress')
       
       /*
        Blouse ye tik yaptıralım
        cy.get('li[class="ac_odd ac_over"]').click()
        bu şekilde locate ulaşamadık bizde parenti olan 
        <div class="ac_results" ... şeklinde gidiyor bununu locate alip
        icinde contains Blouse var bul tik yap tiyelim
        */
       cy.get('.ac_results').contains('Blouse').click()
       cy.get('h1').should('have.text','Blouse') //Blouse yazisini dogruladık
       cy.get('h1').should('be.visible')//Blouse görünüyor dogruladık

    })
    

    
    

    
    
    })