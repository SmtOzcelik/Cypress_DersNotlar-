/// <reference types="cypress" />

describe('US09:Vice Dean ders listesini görebilmeli ',()=>{

    it('TC01 Test',()=>{
    
        cy.Vice_Dean_login_girisi()
        cy.Kullanıcı_lesson_butonuna_tıklar()
        cy.Kullanıcı_ders_listesini_gorunurlugunu_dogrular()
    })
    

    
    
    })