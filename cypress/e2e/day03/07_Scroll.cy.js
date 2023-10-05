/// <reference types="cypress" />

describe('Scroll',()=>{

    it('Scrollintoview',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        
        cy.wait(3000)

        cy.get('#facebook_block > h4').scrollIntoView()
        //istediğimiz locate ye iner scroll yapar

        cy.wait(3000)
    })
    
    it('Scrollintoview',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('h4 > a').scrollIntoView({duration:6000})
        //{duration:6000} demek 6 sn ye in aşağı süzülerek istersek tik yaptir

        cy.scrollTo(0,0)

        cy.scrollTo(0,500)
        //kordinat verip oraya da gitmesini isteyebiliriz
        
    })
    
    
    
    
    
    })