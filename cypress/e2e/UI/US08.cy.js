/// <reference types="cypress" />

describe('US08:Vice Dean ders oluşturabilmelidir',()=>{

    it('TC01 Test Compulsory secili',()=>{
        cy.Vice_Dean_login_girisi()
        cy.Kullanıcı_lesson_butonuna_tıklar()
        cy.Kullanıcı_ders_bilgilerini_girer()
        cy.Kullanıcı_compulsory_secer()
        cy.Kullanıcı_submit_Butonuna_tıklar_Ders()
        cy.Kullanıcı_ders_olusturuldugunu_dogrular()
    })
    
    it('TC01 Test Compulsory secilmedi',()=>{
        cy.Vice_Dean_login_girisi()
        cy.Kullanıcı_lesson_butonuna_tıklar()
        cy.Kullanıcı_ders_bilgilerini_girer()
        cy.Kullanıcı_submit_Butonuna_tıklar_Ders()
        cy.Kullanıcı_ders_olusturuldugunu_dogrular()
    })
    
    
    
    
    
    })