/// <reference types="cypress" />

describe('US06:Dean, Vice Dean hesabı oluşturabilmelidir.',()=>{

    it('TC01 Pozitif Test',()=>{
        cy.Dean_login_girisi()
        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_gender_date_girerr('Male','2010-10-10')
        cy.Kullanıcı_phone_girer()
        cy.Kullanıcı_ssn_girer()
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('Ab142700')
        cy.Kullanıcı_Submit_buton_tıklar()
        cy.Kullanıcı_kayıt_yapıldıgını_dogrularr()
    
    })
    
    it('TC02 Negatif Test eksik phone number',()=>{
        cy.Dean_login_girisi()
        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_gender_date_girerr('Male','2010-10-10')
        cy.Kullanıcı_yanlıs_phoneNumber_girer('545 545 555')
        cy.Kullanıcı_ssn_girer()
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('Ab142700')
        cy.Kullanıcı_Submit_buton_tıklar()
        cy.Kullanıcı_giris_yapılamadıgını_dogrular_eksikNumberr()
        
    })
    
    it('TC03 Negatif gecersiz Phone  numarasi',()=>{
        cy.Dean_login_girisi()
        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_gender_date_girerr('Male','2010-10-10')
        cy.Kullanıcı_yanlıs_phoneNumber_girer('545 545 555555')
        cy.Kullanıcı_ssn_girer()
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('Ab142700')
        cy.Kullanıcı_Submit_buton_tıklar()
        cy.Kullanıcı_giris_yapılamadıgını_dogrular_fazlaNumber()
        
    })
    
    it('TC04 Negatif gecersiz eksik ssn numarasi',()=>{
        cy.Dean_login_girisi()
        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_gender_date_girerr('Male','2010-10-10')
        cy.Kullanıcı_phone_girer()
        cy.Kullanıcı_yanlıs_ssn_number_girer('5565445')
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('Ab142700')
        cy.Kullanıcı_Submit_buton_tıklar()
        cy.Kullanıcı_giris_yapılamadıgını_dogrular_eksik_ssnNumberr()
        
    })

    it('TC05 Negatif  gecersiz Ssn Number',()=>{
        cy.Dean_login_girisi()
        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_gender_date_girerr('Male','2010-10-10')
        cy.Kullanıcı_phone_girer()
        cy.Kullanıcı_yanlıs_ssn_number_girer('55654845555555')
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('Ab142700')
        cy.Kullanıcı_Submit_buton_tıklar()
        cy.Kullanıcı_giris_yapılamadıgını_dogrular_gecersizSsn()
    })

    it('TC06 Negatif  gecersiz eksik Password',()=>{
        cy.Dean_login_girisi()
        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_gender_date_girerr('Male','2010-10-10')
        cy.Kullanıcı_phone_girer()
        cy.Kullanıcı_ssn_girer()
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('Ab142')
        cy.Kullanıcı_Submit_buton_tıklar()
        cy.Kullanıcı_giris_yapılamadıgını_dogrular_yanlısPassword()
    })
    it('TC07 Negatif  gecersiz Büyük harfsiz Password',()=>{
        cy.Dean_login_girisi()
        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_gender_date_girerr('Male','2010-10-10')
        cy.Kullanıcı_phone_girer()
        cy.Kullanıcı_ssn_girer()
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('ab142000')
        cy.Kullanıcı_Submit_buton_tıklar()
        cy.Kullanıcı_giris_yapılamadıgını_dogrular_yanlısPassword()
    })
    it('TC08 Negatif  gecersiz küçük harfsiz Password',()=>{
        cy.Dean_login_girisi()
        cy.Kullanıcı_Name_Surname_BirthPlace_girer('samet','gazi','karaman')
        cy.Kullanıcı_gender_date_girerr('Male','2010-10-10')
        cy.Kullanıcı_phone_girer()
        cy.Kullanıcı_ssn_girer()
        cy.Kullanıcı_userName_girer()
        cy.Kullanıcı_password_girer('AA142000')
        cy.Kullanıcı_Submit_buton_tıklar()
        cy.Kullanıcı_giris_yapılamadıgını_dogrular_yanlısPassword()
    })
    
    
    
    })