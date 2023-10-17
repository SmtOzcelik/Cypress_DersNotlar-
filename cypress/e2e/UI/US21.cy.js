/// <reference types="cypress" />

describe('US21:Ogrenci lesson secebilmeli ',()=>{

    it('TC01 öğrenci ders secebilmeli',()=>{
        //Kullanıcı ogrenci Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('StdTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.navbar > .justify-content-center').should('include.text','StdTeam11')
        //Kullanıcı Teacher,day,Start Time ve Stop Time görünürlügünü dogrular
        cy.wait(1500)
        cy.get('.table-group-divider > :nth-child(1) > :nth-child(2)').should('be.visible')
        cy.get('.table-group-divider > :nth-child(1) > :nth-child(3)').should('be.visible')
        cy.get('.table-group-divider > :nth-child(1) > :nth-child(4)').should('be.visible')
        cy.get('.table-group-divider > :nth-child(1) > :nth-child(5)').should('be.visible')
        //Kullanıcı ders secer
        cy.get(':nth-child(22) > :nth-child(1) > span > div > #lessonProgramId').click()
        //Kullancı submit tıklar ve ders seciminin gercekleştiğini dogrular
        cy.get('.pb-3 > .fw-semibold').click()

        
    })
    
    
    
    })