/// <reference types="cypress" />

describe('US20:Teacher, toplantıları görebilmeli, güncelleyebilmeli ve silebilmelidir',()=>{

    it('TC01 Teacher toplantıları görebilmeli',()=>{

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
         //Kullanıcı Toplantıların,date,start time,stop time ve description gorunurlugunu dogrular
         cy.get('.table-group-divider > tr > :nth-child(1)').should('be.visible')
         cy.get('.table-group-divider > tr > :nth-child(2)').should('be.visible')
         cy.get('.table-group-divider > tr > :nth-child(3)').should('be.visible')
         cy.get('.table-group-divider > tr > :nth-child(4)').should('be.visible')
    
    
    })
    
    it('TC02 Teacher toplantıları güncelleyebilmeli',()=>{
        
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
         //Kullancı Edit tiklar ve sayfanın acıldıgını dogrular
         cy.get('.text-dark').click()
         cy.get('.modal-header > .text-center').should('include.text','Edit Meet')
         //Kullanıcı Description da güncelleme yapar ve submit tıklar
         cy.get('.ms-4 > .card-body > form > .row > .mt-5 > .mb-4 > #description').clear()
         cy.get('.ms-4 > .card-body > form > .row > .mt-5 > .mb-4 > #description').type('güncelleme geldi')
         cy.get('.modal-footer > .fw-semibold').click()
         //Kullanıcı güncellemenin yapıldığını dogrular
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain','Successfully')
        
    })
    
    
    it('TC03 Teacher toplantıları silebilmeli',()=>{
        
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
         //Kullanıcı sil butonunun görünürlügünü dogrular
         cy.get(':nth-child(7) > span > .btn').should('be.visible')
         //Kullanıcı sil butonuna tiklar
         //cy.get(':nth-child(7) > span > .btn').click()
        
    })
    
    
    })