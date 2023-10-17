/// <reference types="cypress" />

describe('US03:Kullanıcılar sayfadan mesaj gönderebilmelidir Contact',()=>{

    it('TC01 Pozitif Contact Test',()=>{
        cy.Kullanıcı_contact_sayfasında()
        cy.Kullanıcı_name_email_subject_message_girer('samet','smt@gmail.com','java','Hello.1')
        cy.Kullanıcı_mesajın_gittigini_dogrular()
    })
    
    it('TC02 Negatif Test(email @ ve . sız )',()=>{
        cy.Kullanıcı_contact_sayfasında()
        cy.Kullanıcı_name_email_subject_message_girer('samet','smtgmailcom','java','Hello.1')
        cy.Kullanıcı_mesajın_gitmedigini_dogrular()
        
    })
    
    
    it('TC03 Negatif Test(email @ sız )',()=>{
        cy.Kullanıcı_contact_sayfasında()
        cy.Kullanıcı_name_email_subject_message_girer('samet','smtgmail.com','java','Hello.1')
        cy.Kullanıcı_mesajın_gitmedigini_dogrular()
        
    })
    
    
    })