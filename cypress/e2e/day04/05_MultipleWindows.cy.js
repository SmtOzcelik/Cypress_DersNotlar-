/// <reference types="cypress" />

describe('Multiple Windows',()=>{

    it('Removing Attribute',()=>{
    
        cy.visit('https://the-internet.herokuapp.com/windows')

        /*
        cyress yeni window açıldığında orayı kontrol edemiyor o yüzden locate 
        yerinde yeni sayfa ac komutunu iptal edip tik yapacaz 
        locate yerinde --> target="_blank"  aşagıdaki kod da target görme
        */
        cy.get('.example > a').invoke('removeAttr','target').click()
        // invoke('removeAttr','target') --> target attribute iptal etti
        // sayfa açıldı ama aynı pencerede

        cy.get('h3').should('have.text','New Window')
    
    })
    
    it.only('New url',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((element) =>{
            const newUrl =element.prop('href')
            // prop ile href="/windows/new" aldım yeni sayfa açı kullanaraktan
            // bi newUrl ye attım aynı sayfada açtırdım
        cy.visit(newUrl)    
        })
        
    })
    
    
    
    })