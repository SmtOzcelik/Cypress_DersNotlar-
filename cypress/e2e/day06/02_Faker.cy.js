/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Using Faker',()=>{
    /*
    https://www.npmjs.com/package/@faker-js/faker pulagin linki
    npm install --save-dev @faker-js/faker  terminale yaz
    import yapıştırma yok e2e dosyasına fakat bir kere mahsus yapıştırma 
    işini class üstüne yapılacak
    */

    it('Faker Login Test',()=>{
        
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.login').click()

        // let,var,const javascript değişkenler

        let email=faker.internet.email()
        cy.get('#email_create').type(email)

        cy.get('#SubmitCreate > span').click()

        cy.get('#id_gender1').click()
    
        let firstName=faker.name.firstName()
        cy.get('#customer_firstname').type(firstName)

        let lastName=faker.name.lastName()
        cy.get('#customer_lastname').type(lastName)

        let password=faker.internet.password()
        cy.get('#passwd').type(password)

        cy.get('#days').select(10)
        cy.get('#months').select('June')
        cy.get('#years').select('2000')
        cy.get('#submitAccount > span').click()

        cy.get('.account > span').should('include.text',firstName)
        cy.get('.account > span').should('include.text',lastName)
    })

    
    
    
    })