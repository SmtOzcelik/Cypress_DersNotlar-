/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
describe('US15:Vice Dean, öğrenci oluşturabilmelidir',()=>{

    it('TC01 Pozitif Test',()=>{

        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('ViceDeanTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve StudentManagement tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(3)').click()
        //Kullanıcı Student Management sayfasında dogrular
        cy.get(':nth-child(1) > .mt-5 > .fw-bold').should('include.text','Student Management')
        //Kullanıcı ögretmen secimi yapar
        cy.scrollTo('top')
        cy.get('#advisorTeacherId').select('Teacher Team11').should('not.be.empty')
        //Kullanıcı name, surname, Birth Place ve email girer
        cy.get('#name').type('Samet')
        cy.get('#surname').type('Ozcelik')
        cy.get('#birthPlace').type('Karaman')
        const emaill=faker.internet.email()
        cy.get('#email').type(emaill)
        //Kullanıcı phone Number girer xxx xxx xxxx unique
        function fakerPhoneNumber() {
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`}
        const fakerPhonenumberr=fakerPhoneNumber()
        cy.get('#phoneNumber').type(fakerPhonenumberr).should('have.value',fakerPhonenumberr)  
        //Kullanıcı gender ve birthday girer
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
        cy.get('#birthDay').type('2000-10-10')
        //Kullanıcı Ssn girer xxx-xx-xxxx unique
        function fakerSsn() {
            const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
          }
          const fakerssn=fakerSsn()
          cy.get('#ssn').type(fakerssn).should('have.value',fakerssn)
        //Kullanıcı username girer unique
        const username=faker.internet.userName()
        cy.get('#username').type(username)
        //Kullanıcı fathername, mothername girer
        cy.get('#fatherName').type('Salim')
        cy.get('#motherName').type('cennet')
        //Kullanıcı geçerli şifre girer
        cy.get('#password').type('Ab142700')
        //Kullanıcı submit butonu tiklar
        cy.get('.mx-auto > div > .fw-semibold').click()
        //Kullanıcı kayıt yapıldığını dogrular
        cy.get('.Toastify__toast-body').should('contain','Student saved Successfully')

    
    
    })
    
    it('TC02 Negaitif Test (Name boş)',()=>{

        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('ViceDeanTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve StudentManagement tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(3)').click()
        //Kullanıcı Student Management sayfasında dogrular
        cy.get(':nth-child(1) > .mt-5 > .fw-bold').should('include.text','Student Management')
        //Kullanıcı ögretmen secimi yapar
        cy.scrollTo('top')
        cy.get('#advisorTeacherId').select('Teacher Team11').should('not.be.empty')
        //Kullanıcı surname, Birth Place ve email girer
        cy.get('#surname').type('Ozcelik')
        cy.get('#birthPlace').type('Karaman')
        const emaill=faker.internet.email()
        cy.get('#email').type(emaill)
        //Kullanıcı phone Number girer xxx xxx xxxx unique
        function fakerPhoneNumber() {
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`}
        const fakerPhonenumberr=fakerPhoneNumber()
        cy.get('#phoneNumber').type(fakerPhonenumberr).should('have.value',fakerPhonenumberr)  
        //Kullanıcı gender ve birthday girer
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
        cy.get('#birthDay').type('2000-10-10')
        //Kullanıcı Ssn girer xxx-xx-xxxx unique
        function fakerSsn() {
            const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
          }
          const fakerssn=fakerSsn()
          cy.get('#ssn').type(fakerssn).should('have.value',fakerssn)
        //Kullanıcı username girer unique
        const username=faker.internet.userName()
        cy.get('#username').type(username)
        //Kullanıcı fathername, mothername girer
        cy.get('#fatherName').type('Salim')
        cy.get('#motherName').type('cennet')
        //Kullanıcı geçerli şifre girer
        cy.get('#password').type('Ab142700')
        //Kullanıcı submit butonu tiklar
        cy.get('.mx-auto > div > .fw-semibold').click()
        //Kullanıcı kayıt yapılamadığını dogrular
        cy.contains('Required').should('be.visible')

    
    
    })
    
    it('TC03 Negatif Test(surname bos)',()=>{

        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('ViceDeanTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve StudentManagement tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(3)').click()
        //Kullanıcı Student Management sayfasında dogrular
        cy.get(':nth-child(1) > .mt-5 > .fw-bold').should('include.text','Student Management')
        //Kullanıcı ögretmen secimi yapar
        cy.scrollTo('top')
        cy.get('#advisorTeacherId').select('Teacher Team11').should('not.be.empty')
        //Kullanıcı name, Birth Place ve email girer
        cy.get('#name').type('Samet')
        cy.get('#birthPlace').type('Karaman')
        const emaill=faker.internet.email()
        cy.get('#email').type(emaill)
        //Kullanıcı phone Number girer xxx xxx xxxx unique
        function fakerPhoneNumber() {
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`}
        const fakerPhonenumberr=fakerPhoneNumber()
        cy.get('#phoneNumber').type(fakerPhonenumberr).should('have.value',fakerPhonenumberr)  
        //Kullanıcı gender ve birthday girer
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
        cy.get('#birthDay').type('2000-10-10')
        //Kullanıcı Ssn girer xxx-xx-xxxx unique
        function fakerSsn() {
            const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
          }
          const fakerssn=fakerSsn()
          cy.get('#ssn').type(fakerssn).should('have.value',fakerssn)
        //Kullanıcı username girer unique
        const username=faker.internet.userName()
        cy.get('#username').type(username)
        //Kullanıcı fathername, mothername girer
        cy.get('#fatherName').type('Salim')
        cy.get('#motherName').type('cennet')
        //Kullanıcı geçerli şifre girer
        cy.get('#password').type('Ab142700')
        //Kullanıcı submit butonu tiklar
        cy.get('.mx-auto > div > .fw-semibold').click()
       //Kullanıcı kayıt yapılamadığını dogrular
       cy.contains('Required').should('be.visible')
    
    })
    it('TC04 Negatif Test(email bos)',()=>{

        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('ViceDeanTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve StudentManagement tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(3)').click()
        //Kullanıcı Student Management sayfasında dogrular
        cy.get(':nth-child(1) > .mt-5 > .fw-bold').should('include.text','Student Management')
        //Kullanıcı ögretmen secimi yapar
        cy.scrollTo('top')
        cy.get('#advisorTeacherId').select('Teacher Team11').should('not.be.empty')
        //Kullanıcı name, surname, Birth Place girer
        cy.get('#name').type('Samet')
        cy.get('#surname').type('Ozcelik')
        cy.get('#birthPlace').type('Karaman')
        
        //Kullanıcı phone Number girer xxx xxx xxxx unique
        function fakerPhoneNumber() {
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`}
        const fakerPhonenumberr=fakerPhoneNumber()
        cy.get('#phoneNumber').type(fakerPhonenumberr).should('have.value',fakerPhonenumberr)  
        //Kullanıcı gender ve birthday girer
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
        cy.get('#birthDay').type('2000-10-10')
        //Kullanıcı Ssn girer xxx-xx-xxxx unique
        function fakerSsn() {
            const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
          }
          const fakerssn=fakerSsn()
          cy.get('#ssn').type(fakerssn).should('have.value',fakerssn)
        //Kullanıcı username girer unique
        const username=faker.internet.userName()
        cy.get('#username').type(username)
        //Kullanıcı fathername, mothername girer
        cy.get('#fatherName').type('Salim')
        cy.get('#motherName').type('cennet')
        //Kullanıcı geçerli şifre girer
        cy.get('#password').type('Ab142700')
        //Kullanıcı submit butonu tiklar
        cy.get('.mx-auto > div > .fw-semibold').click()
       //Kullanıcı kayıt yapılamadığını dogrular
       cy.contains('Required').should('be.visible')
    
    })
    it('TC05 Negatif Test(birthday bos)',()=>{

        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('ViceDeanTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve StudentManagement tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(3)').click()
        //Kullanıcı Student Management sayfasında dogrular
        cy.get(':nth-child(1) > .mt-5 > .fw-bold').should('include.text','Student Management')
        //Kullanıcı ögretmen secimi yapar
        cy.scrollTo('top')
        cy.get('#advisorTeacherId').select('Teacher Team11').should('not.be.empty')
        //Kullanıcı name, surname, Birth Place ve email girer
        cy.get('#name').type('Samet')
        cy.get('#surname').type('Ozcelik')
        cy.get('#birthPlace').type('Karaman')
        const emaill=faker.internet.email()
        cy.get('#email').type(emaill)
        //Kullanıcı phone Number girer xxx xxx xxxx unique
        function fakerPhoneNumber() {
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`}
        const fakerPhonenumberr=fakerPhoneNumber()
        cy.get('#phoneNumber').type(fakerPhonenumberr).should('have.value',fakerPhonenumberr)  
        //Kullanıcı gender 
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
        //Kullanıcı Ssn girer xxx-xx-xxxx unique
        function fakerSsn() {
            const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
          }
          const fakerssn=fakerSsn()
          cy.get('#ssn').type(fakerssn).should('have.value',fakerssn)
        //Kullanıcı username girer unique
        const username=faker.internet.userName()
        cy.get('#username').type(username)
        //Kullanıcı fathername, mothername girer
        cy.get('#fatherName').type('Salim')
        cy.get('#motherName').type('cennet')
        //Kullanıcı geçerli şifre girer
        cy.get('#password').type('Ab142700')
        //Kullanıcı submit butonu tiklar
        cy.get('.mx-auto > div > .fw-semibold').click()
       //Kullanıcı kayıt yapılamadığını dogrular
       cy.contains('Required').should('be.visible')
    
    })
    it('TC06 Negatif Test(birthPlace bos)',()=>{

        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('ViceDeanTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve StudentManagement tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(3)').click()
        //Kullanıcı Student Management sayfasında dogrular
        cy.get(':nth-child(1) > .mt-5 > .fw-bold').should('include.text','Student Management')
        //Kullanıcı ögretmen secimi yapar
        cy.scrollTo('top')
        cy.get('#advisorTeacherId').select('Teacher Team11').should('not.be.empty')
        //Kullanıcı name, surname ve email girer
        cy.get('#name').type('Samet')
        cy.get('#surname').type('Ozcelik')
        const emaill=faker.internet.email()
        cy.get('#email').type(emaill)
        //Kullanıcı phone Number girer xxx xxx xxxx unique
        function fakerPhoneNumber() {
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`}
        const fakerPhonenumberr=fakerPhoneNumber()
        cy.get('#phoneNumber').type(fakerPhonenumberr).should('have.value',fakerPhonenumberr)  
        //Kullanıcı gender ve birthday girer
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
        cy.get('#birthDay').type('2000-10-10')
        //Kullanıcı Ssn girer xxx-xx-xxxx unique
        function fakerSsn() {
            const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
          }
          const fakerssn=fakerSsn()
          cy.get('#ssn').type(fakerssn).should('have.value',fakerssn)
        //Kullanıcı username girer unique
        const username=faker.internet.userName()
        cy.get('#username').type(username)
        //Kullanıcı fathername, mothername girer
        cy.get('#fatherName').type('Salim')
        cy.get('#motherName').type('cennet')
        //Kullanıcı geçerli şifre girer
        cy.get('#password').type('Ab142700')
        //Kullanıcı submit butonu tiklar
        cy.get('.mx-auto > div > .fw-semibold').click()
       //Kullanıcı kayıt yapılamadığını dogrular
       cy.contains('Required').should('be.visible')
    
    })
    it('TC07 Negatif Test(phoneNumber bos)',()=>{

        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('ViceDeanTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve StudentManagement tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(3)').click()
        //Kullanıcı Student Management sayfasında dogrular
        cy.get(':nth-child(1) > .mt-5 > .fw-bold').should('include.text','Student Management')
        //Kullanıcı ögretmen secimi yapar
        cy.scrollTo('top')
        cy.get('#advisorTeacherId').select('Teacher Team11').should('not.be.empty')
        //Kullanıcı name, surname, Birth Place ve email girer
        cy.get('#name').type('Samet')
        cy.get('#surname').type('Ozcelik')
        cy.get('#birthPlace').type('Karaman')
        const emaill=faker.internet.email()
        cy.get('#email').type(emaill)
        
        //Kullanıcı gender ve birthday girer
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
        cy.get('#birthDay').type('2000-10-10')
        //Kullanıcı Ssn girer xxx-xx-xxxx unique
        function fakerSsn() {
            const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
          }
          const fakerssn=fakerSsn()
          cy.get('#ssn').type(fakerssn).should('have.value',fakerssn)
        //Kullanıcı username girer unique
        const username=faker.internet.userName()
        cy.get('#username').type(username)
        //Kullanıcı fathername, mothername girer
        cy.get('#fatherName').type('Salim')
        cy.get('#motherName').type('cennet')
        //Kullanıcı geçerli şifre girer
        cy.get('#password').type('Ab142700')
        //Kullanıcı submit butonu tiklar
        cy.get('.mx-auto > div > .fw-semibold').click()
       //Kullanıcı kayıt yapılamadığını dogrular
       cy.contains('Required').should('be.visible')
    
    })
    it('TC08 Negatif Test(ssn bos)',()=>{

        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('ViceDeanTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve StudentManagement tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(3)').click()
        //Kullanıcı Student Management sayfasında dogrular
        cy.get(':nth-child(1) > .mt-5 > .fw-bold').should('include.text','Student Management')
        //Kullanıcı ögretmen secimi yapar
        cy.scrollTo('top')
        cy.get('#advisorTeacherId').select('Teacher Team11').should('not.be.empty')
        //Kullanıcı name, surname, Birth Place ve email girer
        cy.get('#name').type('Samet')
        cy.get('#surname').type('Ozcelik')
        cy.get('#birthPlace').type('Karaman')
        const emaill=faker.internet.email()
        cy.get('#email').type(emaill)
        //Kullanıcı phone Number girer xxx xxx xxxx unique
        function fakerPhoneNumber() {
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`}
        const fakerPhonenumberr=fakerPhoneNumber()
        cy.get('#phoneNumber').type(fakerPhonenumberr).should('have.value',fakerPhonenumberr)  
        //Kullanıcı gender ve birthday girer
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
        cy.get('#birthDay').type('2000-10-10')
        
        //Kullanıcı username girer unique
        const username=faker.internet.userName()
        cy.get('#username').type(username)
        //Kullanıcı fathername, mothername girer
        cy.get('#fatherName').type('Salim')
        cy.get('#motherName').type('cennet')
        //Kullanıcı geçerli şifre girer
        cy.get('#password').type('Ab142700')
        //Kullanıcı submit butonu tiklar
        cy.get('.mx-auto > div > .fw-semibold').click()
       //Kullanıcı kayıt yapılamadığını dogrular
       cy.contains('Required').should('be.visible')
    
    })
    it('TC09 Negatif Test(father bos)',()=>{

        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('ViceDeanTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve StudentManagement tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(3)').click()
        //Kullanıcı Student Management sayfasında dogrular
        cy.get(':nth-child(1) > .mt-5 > .fw-bold').should('include.text','Student Management')
        //Kullanıcı ögretmen secimi yapar
        cy.scrollTo('top')
        cy.get('#advisorTeacherId').select('Teacher Team11').should('not.be.empty')
        //Kullanıcı name, surname, Birth Place ve email girer
        cy.get('#name').type('Samet')
        cy.get('#surname').type('Ozcelik')
        cy.get('#birthPlace').type('Karaman')
        const emaill=faker.internet.email()
        cy.get('#email').type(emaill)
        //Kullanıcı phone Number girer xxx xxx xxxx unique
        function fakerPhoneNumber() {
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`}
        const fakerPhonenumberr=fakerPhoneNumber()
        cy.get('#phoneNumber').type(fakerPhonenumberr).should('have.value',fakerPhonenumberr)  
        //Kullanıcı gender ve birthday girer
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
        cy.get('#birthDay').type('2000-10-10')
        //Kullanıcı Ssn girer xxx-xx-xxxx unique
        function fakerSsn() {
            const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
          }
          const fakerssn=fakerSsn()
          cy.get('#ssn').type(fakerssn).should('have.value',fakerssn)
        //Kullanıcı username girer unique
        const username=faker.internet.userName()
        cy.get('#username').type(username)
        //Kullanıcı  mothername girer
        
        cy.get('#motherName').type('cennet')
        //Kullanıcı geçerli şifre girer
        cy.get('#password').type('Ab142700')
        //Kullanıcı submit butonu tiklar
        cy.get('.mx-auto > div > .fw-semibold').click()
       //Kullanıcı kayıt yapılamadığını dogrular
       cy.contains('Required').should('be.visible')
    
    })
    it('TC10 Negatif Test(mother bos)',()=>{

        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('ViceDeanTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve StudentManagement tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(3)').click()
        //Kullanıcı Student Management sayfasında dogrular
        cy.get(':nth-child(1) > .mt-5 > .fw-bold').should('include.text','Student Management')
        //Kullanıcı ögretmen secimi yapar
        cy.scrollTo('top')
        cy.get('#advisorTeacherId').select('Teacher Team11').should('not.be.empty')
        //Kullanıcı name, surname, Birth Place ve email girer
        cy.get('#name').type('Samet')
        cy.get('#surname').type('Ozcelik')
        cy.get('#birthPlace').type('Karaman')
        const emaill=faker.internet.email()
        cy.get('#email').type(emaill)
        //Kullanıcı phone Number girer xxx xxx xxxx unique
        function fakerPhoneNumber() {
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`}
        const fakerPhonenumberr=fakerPhoneNumber()
        cy.get('#phoneNumber').type(fakerPhonenumberr).should('have.value',fakerPhonenumberr)  
        //Kullanıcı gender ve birthday girer
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
        cy.get('#birthDay').type('2000-10-10')
        //Kullanıcı Ssn girer xxx-xx-xxxx unique
        function fakerSsn() {
            const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
          }
          const fakerssn=fakerSsn()
          cy.get('#ssn').type(fakerssn).should('have.value',fakerssn)
        //Kullanıcı username girer unique
        const username=faker.internet.userName()
        cy.get('#username').type(username)
        //Kullanıcı fathername girer
        cy.get('#fatherName').type('Salim')
        
        //Kullanıcı geçerli şifre girer
        cy.get('#password').type('Ab142700')
        //Kullanıcı submit butonu tiklar
        cy.get('.mx-auto > div > .fw-semibold').click()
       //Kullanıcı kayıt yapılamadığını dogrular
       cy.contains('Required').should('be.visible')
    
    })
    it('TC11 Student Number Gelmeli',()=>{

        //Kullanıcı Vice Dean Login yapar ve dogrular
        cy.visit('https://managementonschools.com/')
        cy.get('.col-sm-2 > .ms-2').should('include.text','Login')
        cy.get('.col-sm-2 > .ms-2').click()
        cy.get('#username').type('ViceDeanTeam11')
        cy.get('#password').type('Aa123456')
        cy.get('.d-grid > .fw-semibold').click()
        cy.get('.justify-content-center > :nth-child(2)').should('contain','ViceDean')
        //Kullanıcı menu ve StudentManagement tiklar
        cy.get('.navbar > .fw-semibold').click()
        cy.get('.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(3)').click()
        //Kullanıcı Student Management sayfasında dogrular
        cy.get(':nth-child(1) > .mt-5 > .fw-bold').should('include.text','Student Management')
        //Kullanıcı ögretmen secimi yapar
        cy.scrollTo('top')
        cy.get('#advisorTeacherId').select('Teacher Team11').should('not.be.empty')
        //Kullanıcı name, surname, Birth Place ve email girer
        cy.get('#name').type('Samet')
        cy.get('#surname').type('Ozcelik')
        cy.get('#birthPlace').type('Karaman')
        const emaill=faker.internet.email()
        cy.get('#email').type(emaill)
        //Kullanıcı phone Number girer xxx xxx xxxx unique
        function fakerPhoneNumber() {
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber} ${threeDigitNumber} ${fourDigitNumber}`}
        const fakerPhonenumberr=fakerPhoneNumber()
        cy.get('#phoneNumber').type(fakerPhonenumberr).should('have.value',fakerPhonenumberr)  
        //Kullanıcı gender ve birthday girer
        cy.get(':nth-child(2) > .form-check > .form-check-input').check()
        cy.get('#birthDay').type('2000-10-10')
        //Kullanıcı Ssn girer xxx-xx-xxxx unique
        function fakerSsn() {
            const twoDigitNumber = faker.datatype.number({ min: 10, max: 99 });
            const threeDigitNumber = faker.datatype.number({ min: 100, max: 999 });
            const fourDigitNumber = faker.datatype.number({ min: 1000, max: 9999 });
            return `${threeDigitNumber}-${twoDigitNumber}-${fourDigitNumber}`;
          }
          const fakerssn=fakerSsn()
          cy.get('#ssn').type(fakerssn).should('have.value',fakerssn)
        //Kullanıcı username girer unique
        const username=faker.internet.userName()
        cy.get('#username').type(username)
        //Kullanıcı fathername, mothername girer
        cy.get('#fatherName').type('Salim')
        cy.get('#motherName').type('cennet')
        //Kullanıcı geçerli şifre girer
        cy.get('#password').type('Ab142700')
        //Kullanıcı submit butonu tiklar
        cy.get('.mx-auto > div > .fw-semibold').click()
       //Kullanıcı kayıt yapıldığını dogrular
       cy.get('.Toastify__toast-body').should('contain','Student saved Successfully')
       //Kullanıcı student number otomatik olarak geldiğini dogrular
       cy.get('.table-group-divider > :nth-child(1) > :nth-child(1)').should('be.visible')

    
    })
    })