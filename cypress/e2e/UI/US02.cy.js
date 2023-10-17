/// <reference types="cypress" />

describe('US02:Admin Guest User List',()=>{

    it.only('TC01 Name, Phone Number, SSN, User Name bilgileri görülebilmeli',()=>{
    
        cy.Admin_login_girisi()
        cy.Kullanıcı_Guest_User_sayfasında()
        cy.Kullanıcı_name_phoneNumber_ssn_userName_gorunurlugunu_dogrular()
    
    })
    
    it('TC02 Admin Guest User List bilgilerini silebilmeli',()=>{
        cy.Admin_login_girisi()
        cy.Kullanıcı_Guest_User_sayfasında()
        cy.Kullanıcı_kayıtları_siler_ve_dogrular()
        
    })
    
    
    
    
    
    })