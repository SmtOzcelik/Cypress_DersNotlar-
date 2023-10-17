/// <reference types="cypress" />

describe('US05:Admin, Dean leri görebilmeli ve güncelleyebilmeli',()=>{

    it('TC01 Admin, Dean leri görebilmeli',()=>{
        cy.Admin_login_girisi()
        cy.Kullanıcı_Dean_Management_sayfasında()
        cy.Kullanıcı_Deanleri_gordugunu_dogrular()
    })
    
    
    it('TC02 Admin, Dean leri güncelleyebilmeli',()=>{
        cy.Admin_login_girisi()
        cy.Kullanıcı_Dean_Management_sayfasında()
        cy.Kullanıcı_Dean_Managementleri_gunceller()
    })
    
    
    
    
    })