/// <reference types="cypress" />

describe('CheckBoxes',()=>{

    it('Single CheckBox',()=>{
    
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.row').contains('Women').click()
        //kendinden locate alamadık parent class attrubute kullantık contains Women yaptık

        cy.get('#layered_category_4').should('not.be.checked')
        // should('not.be.checked')--->kutu tikli degil dogruladık

        cy.get('#layered_category_4').check()
        // check()---> kutu tikli hale getirdik

        cy.get('#layered_category_4').should('be.checked')
        //should('be.checked')---> tikli oldugunu dogruladik

        cy.get('#layered_category_4').uncheck().should('not.be.checked')
        //uncheck()--->tikli olanı kaldir ve dogrula


    })
    
    it('All CheckBoxes 1',()=>{
    
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.row').contains('Women').click()

        //Bütün checkbox lara tıkladık 18 tane 
        cy.get('input[type="checkbox"]').check()

        cy.wait(3000)
        cy.get('input[type="checkbox"]').uncheck()//tikleri kaldırdık
    })
    
    it('All CheckBoxes 2',()=>{
        //istediğimiz index de check yapalim

        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.row').contains('Women').click()
        
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked') //1.kutu check() yap

        cy.get('input[type="checkbox"]').eq(6).check().should('be.checked') //7.kutu check() yap

        cy.get('input[type="checkbox"]').eq(12).check().should('be.checked') //13.kutu check() yap

        // kaldıralım ve dogrulayalım
        cy.get('input[type="checkbox"]').eq(0).uncheck().should('not.be.checked')

    })

    it('All CheckBoxes 3',()=>{
    
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.row').contains('Women').click()
        
        cy.get('input[type="checkbox"]').click({ multiple: true } )
        //click({ multiple: true } )--> tüm checkbox lara tiklar
    })
    
    it('All CheckBoxes 3',()=>{
    
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.row').contains('Women').click()
        
        cy.get('input[type="checkbox"]').eq(0).check()
        /*
        checkbox tik olduktan sonra locate yerinin parent kısmında yeni yer
        acılır. class="checked" şeklinde bizde dogrulama yaparken oraya atıf 
        yaparak gerçekleştirebiliriz aşağıdaki gibi 
        parent()---> parent e git
        should('have.class','checked')--> attribute class olan checked mi
        */
        cy.get('input[type="checkbox"]').eq(0).parent().should('have.class','checked')
    })
    })