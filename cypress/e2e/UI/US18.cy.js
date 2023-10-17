/// <reference types="cypress" />

describe('US18:Teacher, öğrenciye verdiği notları, görebilmeli ve güncelleyebilmelidir',()=>{

    it('TC01 Teacher ögrenci notlarını görebilmeli',()=>{
        //Kullanıcı Techer Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('TechTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.mt-4 > .fw-bold').should('include.text','Student Info Management')
        //Kullanıcı Student Info List görünürlügünü dogrular
        cy.get('.mb-5 > .fw-bold').should('be.visible')
        //Kullanıcı name,lesson name,vize,final,info ve average notlarının görünürlügünü dogrular
        cy.get('tr > :nth-child(1) > span').should('be.visible')
        cy.get('tbody > tr > :nth-child(2)').should('be.visible')
        cy.get('tbody > tr > :nth-child(3)').should('be.visible')
        cy.get('tbody > tr > :nth-child(4)').should('be.visible')
        cy.get('tbody > tr > :nth-child(5)').should('be.visible')
        cy.get('tbody > tr > :nth-child(6)').should('be.visible')
        cy.get('tbody > tr > :nth-child(7)').should('be.visible')
        cy.get('tbody > tr > :nth-child(8)').should('be.visible')
    
    })
    it('TC02 Teacher ögrenci notlarını güncelleyebilmeli',()=>{
        //Kullanıcı Techer Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('TechTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.mt-4 > .fw-bold').should('include.text','Student Info Management')
        //Kullanıcı edit buton tik yapar
        cy.get('.text-dark').click()
        //Kullanıcı edit sayfasının acıldığını dogrular
        cy.get('.modal-header > .text-center').should('include.text','Edit Student Info')
        //Kullanıcı final notunu günceller
        cy.get('.ms-4 > .card-body > form > .row > :nth-child(6) > .mb-4 > #finalExam').clear()
        cy.get('.ms-4 > .card-body > form > .row > :nth-child(6) > .mb-4 > #finalExam').type('100')
        //Kullanıcı submit buton tik yapar
        cy.get('.modal-footer > .fw-semibold').click()
        //Kullanıcı güncellemenin yapıldığını dogrular
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain','Successfully')
       

    })
    it.only('TC03 Teacher ögrenci notlarını silebilmeli',()=>{
        //Kullanıcı Techer Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('TechTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.mt-4 > .fw-bold').should('include.text','Student Info Management')
        //Kullanıcı sil butonuna tiklar
        //cy.get(':nth-child(10) > span > .btn').click()
    })
    
    
    
    
    
    
    })