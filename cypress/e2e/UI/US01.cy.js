/// <reference types="cypress" />

describe('US01:Aday öğrenciler sisteme kayıt olabilmelidir(Register)',()=>{

    beforeEach('',()=>{
       
        cy.Kullanıcı_register_sayfasında()
        
    })

    it('TC01 Pozitif Test ',()=>{

        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_phone_girer()
        cy.Kullanıcı_gender_date_girer('Male','2010-10-10')
        cy.Kullanıcı_ssn_girer()
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('Ab142700')
        cy.Kullanıcı_Register_Butonuna_Tıklar()
        cy.Kullanıcı_Register_onay_mesajını_dogrular()
    
    })
    
   
    it('TC02 Negatif Test(Eksik phone number) ',()=>{

        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_yanlıs_phoneNumber_girer('545 545 555')
        cy.Kullanıcı_gender_date_girer('Male','2010-10-10')
        cy.Kullanıcı_ssn_girer()
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('Ab142700')
        cy.Kullanıcı_Register_Butonuna_Tıklar()
        cy.Kullanıcı_giris_yapılamadıgını_dogrular_eksikNumber()
    })
    
    
    it('TC03 Negatif Test(Fazla phone number) ',()=>{

        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_yanlıs_phoneNumber_girer('545 5545 55555')
        cy.Kullanıcı_gender_date_girer('Male','2010-10-10')
        cy.Kullanıcı_ssn_girer()
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('Ab142700')
        cy.Kullanıcı_Register_Butonuna_Tıklar()
        cy.Kullanıcı_giris_yapılamadıgını_dogrular_fazlaNumber()
    })
    it('TC04 Negatif Test(Eksik ssn number) ',()=>{

        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_phone_girer()
        cy.Kullanıcı_gender_date_girer('Male','2010-10-10')
        cy.Kullanıcı_yanlıs_ssn_number_girer('55654845')
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('Ab142700')
        cy.Kullanıcı_Register_Butonuna_Tıklar()
        cy.Kullanıcı_giris_yapılamadıgını_dogrular_eksik_ssnNumber()
    
    })
    it('TC05 Negatif Test(Yanlış password) ',()=>{

        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_phone_girer()
        cy.Kullanıcı_gender_date_girer('Male','2010-10-10')
        cy.Kullanıcı_ssn_girer()
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('ab142700')
        cy.Kullanıcı_Register_Butonuna_Tıklar()
        cy.Kullanıcı_giris_yapılamadıgını_dogrular_yanlısPassword()
    
    })
    })