/// <reference types="cypress" />

describe('US14:Vice Dean öğretmenleri görüntüleyebilmeli',()=>{

    it.only('TC01 Vice Dean ögretmenliri görür',()=>{

        cy.Vice_Dean_login_girisi()
        cy.Kullanıcı_teacher_managament_sayfasında()
        cy.Kullanıcı_ogretmenleri_gorunurlugunu_dogrular()
    })
    
    it('',()=>{
    
        
    })
    
    
    
    
    
    })