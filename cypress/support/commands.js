

// http://www.automationpractice.com sitesine login yapma
Cypress.Commands.add('automationp_login',(email,password) =>{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.get('.login').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click()
})

// Amazon Arama : Girilen ürün için arama
Cypress.Commands.add('amazonSearch',(productName) =>{
    cy.visit('https://www.amazon.com')
    cy.get('#twotabsearchtextbox').type(productName).should('have.value',productName)
    cy.get('#nav-search-submit-button').click()

})


Cypress.Commands.add('Kullanıcı_register_sayfasında',()=>{    
    cy.visit('https://managementonschools.com/')
    cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
    cy.get('.me-2').click()
    cy.get('.card-body > .shadow-sm').should('include.text','Register')
    
})

Cypress.Commands.add('Kullanıcı_Name_Surname_BirthPlace_girer',(name,surname,birthPlace)=>{
    cy.get('#name').scrollIntoView()
    cy.get('#name').type(name).should('have.value',name)
    cy.get('#surname').type(surname).should('have.value',surname)
    cy.get('#birthPlace').type(birthPlace).should('have.value',birthPlace)

})
import { faker } from '@faker-js/faker'

Cypress.Commands.add('Kullanıcı_phone_girer',()=>{
    
    function fakerPhoneNumber() {
        const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
        const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
        return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`;
      }

      const fakerPhonenumberr=fakerPhoneNumber()
    cy.get('#phoneNumber').type(fakerPhonenumberr).should('have.value',fakerPhonenumberr)
})

Cypress.Commands.add('Kullanıcı_gender_date_girer',(gender,date)=>{
    if(gender==='Male'){
        cy.get(':nth-child(7) > .form-check-input').check()
    }else{
        cy.get(':nth-child(6) > .form-check-input').check()
    }
    
    cy.get('#birthDay').type(date)
})
Cypress.Commands.add('Kullanıcı_gender_date_girerr',(gender,date)=>{
    if(gender==='Male'){
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
    }else{
        cy.get(':nth-child(1) > .form-check > .form-check-input').check()
    }
    
    cy.get('#birthDay').type(date)
})

Cypress.Commands.add('Kullanıcı_ssn_girer',()=>{
    function fakerSsn() {
        const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
        const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
        const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
        return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
      }
      const fakerssn=fakerSsn()
      cy.get('#ssn').type(fakerssn).should('have.value',fakerssn)
      

})

Cypress.Commands.add('Kullanıcı_userName_girer',()=>{
    const fakerUsername=faker.name.firstName()
    cy.get('#username').type(fakerUsername).should('have.value',fakerUsername)
})

Cypress.Commands.add('Kullanıcı_password_girer',(password)=>{
    cy.get('#password').type(password).should('have.value',password)
})
Cypress.Commands.add('Kullanıcı_Register_Butonuna_Tıklar',()=>{
    cy.get('.d-grid > .fw-semibold').click()
})

Cypress.Commands.add('Kullanıcı_Register_onay_mesajını_dogrular',()=>{
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain','Guest User regis')
})

Cypress.Commands.add('Kullanıcı_yanlıs_phoneNumber_girer',(eksikPhone)=>{
    cy.get('#phoneNumber').type(eksikPhone)
})

Cypress.Commands.add('Kullanıcı_giris_yapılamadıgını_dogrular_eksikNumber',()=>{
    cy.get(':nth-child(4) > .invalid-feedback').should('contain','Minimum 12')
})


Cypress.Commands.add('Kullanıcı_giris_yapılamadıgını_dogrular_eksikNumberr',()=>{
    cy.get(':nth-child(6) > .mb-4 > .invalid-feedback').should('contain','Minimum 12')
})


Cypress.Commands.add('Kullanıcı_giris_yapılamadıgını_dogrular_fazlaNumber',()=>{
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain','should be exact 12 characters')
})
Cypress.Commands.add('Kullanıcı_yanlıs_ssn_number_girer',(number)=>{
    cy.get('#ssn').type(number)
})
Cypress.Commands.add('Kullanıcı_giris_yapılamadıgını_dogrular_eksik_ssnNumber',()=>{
    cy.get(':nth-child(9) > .invalid-feedback').should('contain','Minimum 11')
})
Cypress.Commands.add('Kullanıcı_giris_yapılamadıgını_dogrular_eksik_ssnNumberr',()=>{
    cy.get(':nth-child(7) > .mb-4 > .invalid-feedback').should('contain','Minimum 11')
})

Cypress.Commands.add('Kullanıcı_giris_yapılamadıgını_dogrular_yanlısPassword',()=>{
    cy.get(':nth-child(11) > .invalid-feedback').should('contain','One uppercase')
})

Cypress.Commands.add('Admin_login_girisi',()=>{
    cy.visit('https://managementonschools.com/')
    cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
    cy.get('.col-sm-2 > .ms-2').click()
    cy.get('#username').type('AdminTeam11')
    cy.get('#password').type('Aa123456')
    cy.get('.d-grid > .fw-semibold').click()
})
Cypress.Commands.add('Dean_login_girisi',()=>{
    cy.visit('https://managementonschools.com/')
    cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
    cy.get('.col-sm-2 > .ms-2').click()
    cy.get('#username').type('DeanTeam11')
    cy.get('#password').type('Aa123456')
    cy.get('.d-grid > .fw-semibold').click()
})
Cypress.Commands.add('Vice_Dean_login_girisi',()=>{
    cy.visit('https://managementonschools.com/')
    cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
    cy.get('.col-sm-2 > .ms-2').click()
    cy.get('#username').type('ViceDeanTeam11')
    cy.get('#password').type('Aa123456')
    cy.get('.d-grid > .fw-semibold').click()
})
Cypress.Commands.add('Kullanıcı_Guest_User_sayfasında',()=>{
    cy.get('.navbar > .fw-semibold').click()
    cy.get('.justify-content-start > :nth-child(11)').click()
})
Cypress.Commands.add('Kullanıcı_name_phoneNumber_ssn_userName_gorunurlugunu_dogrular',()=>{
    cy.get('.table-group-divider > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get('.table-group-divider > :nth-child(1) > :nth-child(1)').should('not.be.empty')
    cy.get('.table-group-divider > :nth-child(1) > :nth-child(3)').should('not.be.empty')
    cy.get('.table-group-divider > :nth-child(1) > :nth-child(4)').should('not.be.empty')
})
Cypress.Commands.add('Kullanıcı_kayıtları_siler_ve_dogrular',()=>{
    cy.get(':nth-child(1) > :nth-child(5) > span > .btn').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain','Guest User deleted Succ')
    
})
Cypress.Commands.add('Kullanıcı_contact_sayfasında',()=>{
    cy.visit('https://managementonschools.com/')
    cy.get('.justify-content-start > :nth-child(5)').click()
})
Cypress.Commands.add('Kullanıcı_name_email_subject_message_girer',(name,email,subject,message)=>{
    cy.get('#name').type(name).should('have.value',name)
    cy.get('#email').type(email).should('have.value',email)
    cy.get('#subject').type(subject).should('have.value',subject)
    cy.get('#message').type(message).should('have.value',message)
    cy.get('.fw-semibold').click()

})
Cypress.Commands.add('Kullanıcı_mesajın_gittigini_dogrular',()=>{
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain','Successfully')
})

Cypress.Commands.add('Kullanıcı_mesajın_gitmedigini_dogrular',()=>{
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain','valid email')
})
Cypress.Commands.add('Kullanıcı_Dean_Management_sayfasında',()=>{
    cy.get('.navbar > .fw-semibold').click()
    cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(2)').click()
    cy.get(':nth-child(3) > .mb-5 > .fw-bold').should('include.text','Dean List')
    cy.wait(1500)
})
Cypress.Commands.add('Kullanıcı_Submit_buton_tıklar',()=>{
    cy.get('.mx-auto > .fw-semibold').click()
})
Cypress.Commands.add('Kullanıcı_kayıt_yapıldıgını_dogrular',()=>{
    cy.contains('Saved').first().should('include.text','Saved')
})
Cypress.Commands.add('Kullanıcı_kayıt_yapıldıgını_dogrularr',()=>{
    cy.contains('ean Saved').first().should('include.text','ean Saved')
})

Cypress.Commands.add('Kullanıcı_giris_yapılamadıgını_dogrular_gecersizSsn',()=>{
    cy.contains('Please enter valid SSN number').first().should('include.text','valid')
})
Cypress.Commands.add('Kullanıcı_giris_yapılamadıgını_dogrular_yanlısPassword',()=>{
    cy.get(':nth-child(9) > .mb-4 > .invalid-feedback').should('contain','character')
})
Cypress.Commands.add('Kullanıcı_Deanleri_gordugunu_dogrular',()=>{
    cy.get('.table-group-divider > :nth-child(1) > :nth-child(1)').should('not.be.empty')
 })
 Cypress.Commands.add('Kullanıcı_Dean_Managementleri_gunceller',()=>{
    cy.get(':nth-child(1) > :nth-child(6) > span > .text-dark').click()
    cy.get('.modal-header > .text-center').should('be.visible')
    cy.get('.modal-body > .border > .card-body > form > :nth-child(1) > :nth-child(2) > .mb-4 > #surname').clear().type('samet')
    cy.get('.modal-body > .border > .card-body > form > :nth-child(1) > :nth-child(9) > .mb-4 > #password').type('Aa123456')
    cy.get('.modal-body > .border > .card-body > form > :nth-child(1) > .text-center > .row > :nth-child(2) > .form-check > .form-check-input').check()
    cy.get('.modal-footer > .fw-semibold').click()
    cy.contains('Dean updated Successful').should('contain','updated')
})
Cypress.Commands.add('Dean_Contact_Message_sayfasında',()=>{
    cy.get('.navbar > .fw-semibold').click()
    cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(2)').click()
    cy.get('.mb-5 > .fw-bold').should('include.text','Contact Message')
})
Cypress.Commands.add('Kullanıcı_Contact_Message_gorunurlugunu_dogrular',()=>{
    cy.get('.table-group-divider > :nth-child(1) > :nth-child(1)').should('be.visible')
})
Cypress.Commands.add('Kullanıcı_lesson_butonuna_tıklar',()=>{
    cy.get('#controlled-tab-example-tab-lessonsList').scrollIntoView().click()
})
Cypress.Commands.add('Kullanıcı_lesson_program_butonuna_tıklar',()=>{
    cy.get('#controlled-tab-example-tab-lessonProgram').scrollIntoView().click()
})
Cypress.Commands.add('Kullanıcı_ders_bilgilerini_girer',()=>{
    const lesson=faker.lorem.words(2)
    cy.get('#lessonName').type(lesson)
    
    cy.get('#creditScore').type(10)
})
Cypress.Commands.add('Kullanıcı_compulsory_secer',()=>{
    cy.get('#compulsory').check()
})
Cypress.Commands.add('Kullanıcı_submit_Butonuna_tıklar_Ders',()=>{
    cy.get('#controlled-tab-example-tabpane-lessonsList > :nth-child(2) > .mb-5 > :nth-child(1) > .card-body > form > .row > .mx-auto > div > .fw-semibold').click()
})
Cypress.Commands.add('Kullanıcı_ders_olusturuldugunu_dogrular',()=>{
    cy.get('.Toastify__toast-body > :nth-child(2)').should('include.text','Lesson Created')
})
Cypress.Commands.add('Kullanıcı_ders_listesini_gorunurlugunu_dogrular',()=>{
    cy.get('#controlled-tab-example-tabpane-lessonsList > :nth-child(2) > :nth-child(2) > :nth-child(1) > .fw-bold').should('include.text','Lesson List')
    cy.get('#controlled-tab-example-tabpane-lessonsList > :nth-child(2) > :nth-child(2) > :nth-child(1) > .table > .table-group-divider > :nth-child(1) > :nth-child(1)').should('be.visible')
})
Cypress.Commands.add('Kullanıcı_ders_secer',(ders)=>{
    cy.get('.css-1xc3v61-indicatorContainer').type(ders)
    cy.get('#react-select-2-option-4').click()
})
Cypress.Commands.add('Kullanıcı_gun_secer',(gun)=>{
    cy.get('#day').select(gun)
})
Cypress.Commands.add('Kullanıcı_lesson_day_starTime_stopTime_gorunurlugunu_dogrular',()=>{
    cy.get('#controlled-tab-example-tabpane-lessonProgram > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .fw-bold').scrollIntoView().should('contain','Lesson Program List')
    cy.get(':nth-child(1) > :nth-child(1) > .table > .table-group-divider > :nth-child(1) > :nth-child(1)').should('be.visible')
    cy.get(':nth-child(1) > :nth-child(1) > .table > .table-group-divider > :nth-child(1) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(1) > :nth-child(1) > .table > .table-group-divider > :nth-child(1) > :nth-child(3)').should('not.be.empty')
    cy.get(':nth-child(1) > :nth-child(1) > .table > .table-group-divider > :nth-child(1) > :nth-child(4)').should('not.be.empty')

})
Cypress.Commands.add('Kullanıcı_teacher_managament_sayfasında',()=>{
    cy.get('.navbar > .fw-semibold').click()
    cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(2)').click()
    cy.get(':nth-child(2) > .ms-3 > .fw-bold').should('be.visible')
    cy.scrollTo('top')
})
Cypress.Commands.add('Kullanıcı_ogretmenleri_gorunurlugunu_dogrular',()=>{
    cy.get(':nth-child(3) > .mt-5 > .fw-bold').should('include.text','Teacher List')
    cy.get(':nth-child(3) > .mt-5 > .card-body > .table-responsive > .table > .table-group-divider > :nth-child(1) > :nth-child(1)').should('be.visible')
})

Cypress.Commands.add('tokenAl',()=>{
    const tokenUrl='https://managementonschools.com/app/auth/login'
        const username='AdminSamet'
        const password='Ab142790'
        const requestBody={
            username:username,
            password:password,
        }
        
        cy.request({
            method:'POST',
            url:tokenUrl,
            body:requestBody,
        }).then((response)=>{
           expect(response.status).to.equal(200)
            return response.body.token
        })

})