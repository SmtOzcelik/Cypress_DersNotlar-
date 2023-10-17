/// <reference types="cypress" />

describe('US07:Dean, kullanıcıların gönderdiği mesajları görebilmelidir.',()=>{

    it('TC01 Dean mesajları görür ',()=>{
        cy.Dean_login_girisi()
        cy.Dean_Contact_Message_sayfasında()
        cy.Kullanıcı_Contact_Message_gorunurlugunu_dogrular()
    
    
    })
    
    
    
    
    
    })