/// <reference types="cypress" />

describe('Login Menu Test',()=>{

    it('Test Case 1',()=>{
    // women, Dresses,T-shirts ve Blog dogrula    
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.get('.login').click()

    cy.contains('Women').should('be.visible') // contain ile assert ve locate ulaşılabiliyor mu
    cy.contains('Women').should('have.text','Women')//text i Women olmali
    cy.contains('Women').should('contain','Women')//text Women içermeli
    
    cy.get('[title="Dresses"]').should('be.visible')//get ile assert
    
    cy.get('li').find('[title="T-shirts"]').should('include.text','T-shirts')
    //cy.get.find ile buldum örnek olsun diye get ile ulaşilamayan locate ile

   // cy.get('[title="Blog"]') bu şeklde locate ulaşamiyorum find devreye giriyor
   // li üst tag [title="Blog"] alt satırda yer
   cy.get('li').find('[title="Blog"]').should('be.visible')

    })
    
    it('Test Case 2',()=>{
        // Email adres dogrula
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.login').click()
        
        //1.yol
        cy.get(':nth-child(1) > label').should('be.visible')//görünüyor mu
        cy.get(':nth-child(1) > label').should('contain','Email')//Email iceriyor mu
        cy.get('div').find('[for="email"]').should('contain','Email')//get.find ile yaptık

        //2.yol fonksiyon oluşturularak uzun yöntem
        cy.get(':nth-child(1) > label').then(email =>{
            expect(email.text()).to.equal('Email address')
        })

        //3.yol
        cy.get(':nth-child(1) > label').invoke('text').then(email2 =>{
            expect(email2).to.equal('Email address')
        })


        
    })
    
    

    
    
    
    })