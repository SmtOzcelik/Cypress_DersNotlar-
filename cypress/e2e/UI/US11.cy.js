/// <reference types="cypress" />

describe('US11:Vice Dean ders programını görebilmeli',()=>{

    it('TC01 Kullanıcı lesson, day, start time, stop time görür',()=>{
        cy.Vice_Dean_login_girisi()
        cy.Kullanıcı_lesson_program_butonuna_tıklar()
        cy.Kullanıcı_lesson_day_starTime_stopTime_gorunurlugunu_dogrular()
        
    })
    

    
    
    
    })