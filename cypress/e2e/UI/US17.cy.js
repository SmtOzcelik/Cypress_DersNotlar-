/// <reference types="cypress" />

describe('US17:Teacher, öğrencilere not verebilmelidir',()=>{

    it('TC01 Pozitif Test',()=>{
        //Kullanıcı Techer Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('TechTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.mt-4 > .fw-bold').should('include.text','Student Info Management')
        //Kullanıcı ders secer
        cy.get('#lessonId').select('Selenium')
        //Kullanıcı ogrenci secer
        cy.get('#studentId').select('Aamir Khan')
        //Kullanıcı dönem secer
        cy.get('#educationTermId').then(($select) => {
            const optionValue = 'SPRING_SEMESTER'; 
            const options = $select.find('option');
            options.each((index, option) => {
              const $option = Cypress.$(option);
              if ($option.val() === optionValue || $option.text() === optionValue) {
                $option.prop('selected', true);
              }
            })
           })
        //Kullanıcı devamsızlık girer
        cy.get('#absentee').type(2)
        //Kullanıcı vize notu girer
        cy.get('#midtermExam').type('70')
        //Kullanıcı final notunu girer
        cy.get('#finalExam').type('80')
        //Kullanıcı info notu girer
        cy.get('#infoNote').type('Basarılı gecti')
        //Kullanıcı submit tik yapar
        cy.get('.mx-auto > div > .fw-semibold').click()    
          
    })
    it('TC02 Negatif Test(Devamsızlık girişi yapılmadan)',()=>{
        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('TechTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.mt-4 > .fw-bold').should('include.text','Student Info Management')
        //Kullanıcı ders secer
        cy.get('#lessonId').select('Selenium')
        //Kullanıcı ogrenci secer
        cy.get('#studentId').select('Aamir Khan')
        //Kullanıcı dönem secer
        cy.get('#educationTermId').then(($select) => {
            const optionValue = 'SPRING_SEMESTER'; 
            const options = $select.find('option');
            options.each((index, option) => {
              const $option = Cypress.$(option);
              if ($option.val() === optionValue || $option.text() === optionValue) {
                $option.prop('selected', true);
              }
            })
           })
        
        //Kullanıcı vize notu girer
        cy.get('#midtermExam').type('70')
        //Kullanıcı final notunu girer
        cy.get('#finalExam').type('80')
        //Kullanıcı info notu girer
        cy.get('#infoNote').type('Basarılı gecti')
        //Kullanıcı submit tik yapar
        cy.get('.mx-auto > div > .fw-semibold').click()    
        //Kullanıcı giris yapılmadığını dogrular
        cy.contains('Required').should('be.visible')
          
    })
    it('TC03 Negatif Test(Vize notu girişi yapılmadan)',()=>{
        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('TechTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.mt-4 > .fw-bold').should('include.text','Student Info Management')
        //Kullanıcı ders secer
        cy.get('#lessonId').select('Selenium')
        //Kullanıcı ogrenci secer
        cy.get('#studentId').select('Aamir Khan')
        //Kullanıcı dönem secer
        cy.get('#educationTermId').then(($select) => {
            const optionValue = 'SPRING_SEMESTER'; 
            const options = $select.find('option');
            options.each((index, option) => {
              const $option = Cypress.$(option);
              if ($option.val() === optionValue || $option.text() === optionValue) {
                $option.prop('selected', true);
              }
            })
           })
        //Kullanıcı devamsızlık girer
        cy.get('#absentee').type(2)
        //Kullanıcı final notunu girer
        cy.get('#finalExam').type('80')
        //Kullanıcı info notu girer
        cy.get('#infoNote').type('Basarılı gecti')
        //Kullanıcı submit tik yapar
        cy.get('.mx-auto > div > .fw-semibold').click()    
        //Kullanıcı giris yapılmadığını dogrular
        cy.contains('Required').should('be.visible')
          
    })
    it('TC04 Negatif Test(Final notu girişi yapılmadan)',()=>{
        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('TechTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.mt-4 > .fw-bold').should('include.text','Student Info Management')
        //Kullanıcı ders secer
        cy.get('#lessonId').select('Selenium')
        //Kullanıcı ogrenci secer
        cy.get('#studentId').select('Aamir Khan')
        //Kullanıcı dönem secer
        cy.get('#educationTermId').then(($select) => {
            const optionValue = 'SPRING_SEMESTER'; 
            const options = $select.find('option');
            options.each((index, option) => {
              const $option = Cypress.$(option);
              if ($option.val() === optionValue || $option.text() === optionValue) {
                $option.prop('selected', true);
              }
            })
           })
        //Kullanıcı devamsızlık girer
        cy.get('#absentee').type(2)
        //Kullanıcı vize notu girer
        cy.get('#midtermExam').type('70')
        //Kullanıcı info notu girer
        cy.get('#infoNote').type('Basarılı gecti')
        //Kullanıcı submit tik yapar
        cy.get('.mx-auto > div > .fw-semibold').click()    
        //Kullanıcı giris yapılmadığını dogrular
        cy.contains('Required').should('be.visible')
          
    })
    it('TC05 Negatif Test(Info girişi yapılmadan)',()=>{
        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('TechTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.mt-4 > .fw-bold').should('include.text','Student Info Management')
        //Kullanıcı ders secer
        cy.get('#lessonId').select('Selenium')
        //Kullanıcı ogrenci secer
        cy.get('#studentId').select('Aamir Khan')
        //Kullanıcı dönem secer
        cy.get('#educationTermId').then(($select) => {
            const optionValue = 'SPRING_SEMESTER'; 
            const options = $select.find('option');
            options.each((index, option) => {
              const $option = Cypress.$(option);
              if ($option.val() === optionValue || $option.text() === optionValue) {
                $option.prop('selected', true);
              }
            })
           })
        //Kullanıcı devamsızlık girer
        cy.get('#absentee').type(2)
        //Kullanıcı vize notu girer
        cy.get('#midtermExam').type('70')
        //Kullanıcı final notunu girer
        cy.get('#finalExam').type('80')
        //Kullanıcı submit tik yapar
        cy.get('.mx-auto > div > .fw-semibold').click()    
        //Kullanıcı giris yapılmadığını dogrular
        cy.contains('Required').should('be.visible')
          
    })
    
    
    
    })