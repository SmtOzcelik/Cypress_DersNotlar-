/// <reference types="cypress" />

describe('US19:Teacher, öğrenciye verdiği notları, görebilmeli ve güncelleyebilmelidir',()=>{

    it('TC01 Test',()=>{
        //Kullanıcı Techer Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('TechTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.mt-4 > .fw-bold').should('include.text','Student Info Management')
        //Kullanıcı Menu ve Meet Management tıklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(2)').click()
        //Kullanıcı meet sayfasında oldugunu dogrular
        cy.get(':nth-child(2) > .mb-5 > .fw-bold').should('include.text','Add Meet')
        //Kullanıcı ogrenci secer
        cy.get('.css-hlgwow').then(($select) => {
            const optionValue = 'Aamir Khan'; 
            const options = $select.find('option');
            options.each((index, option) => {
              const $option = Cypress.$(option);
              if ($option.val() === optionValue || $option.text() === optionValue) {
                $option.prop('selected', true);
              }
            })
           })
        // dropdown menu hatası oldugu için devam edilemedi
    
    })
    
    
    
    
    
    
    
    })