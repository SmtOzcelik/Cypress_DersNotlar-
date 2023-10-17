/// <reference types="cypress" />

describe('US16:Vice Dean, kullanıcıların gönderdiği mesajları görebilmelidir',()=>{

    it('TC01 Test',()=>{
    
         //Kullanıcı Vice Dean Login yapar ve dogrular
         cy.visit('https://managementonschools.com/')
         cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
         cy.get('.col-sm-2 > .ms-2').click()
         cy.get('#username').type('ViceDeanTeam11')
         cy.get('#password').type('Aa123456')
         cy.get('.d-grid > .fw-semibold').click()
         cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve contact get all tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(4)').click()
        //Kullancı contact message sayfasında oldugunu dogralar
        cy.get('.mb-5 > .fw-bold').should('be.visible')
        //Kullanıcı mesajları görünürlügünü dogrular
        cy.get('.table-group-divider > :nth-child(1) > :nth-child(5)').should('not.be.empty')
    })
    
    
    
    
    
    })