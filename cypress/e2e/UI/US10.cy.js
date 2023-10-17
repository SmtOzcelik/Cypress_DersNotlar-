/// <reference types="cypress" />

describe('Vice Dean ders programı oluşturabilmelidir',()=>{

    it.only('TC01 Test',()=>{

        cy.Vice_Dean_login_girisi()
        cy.Kullanıcı_lesson_program_butonuna_tıklar()
        cy.Kullanıcı_ders_secer('Java')
        cy.Kullanıcı_gun_secer('MONDAY')
        
    })
    
    
    
    
    
    
    
    })