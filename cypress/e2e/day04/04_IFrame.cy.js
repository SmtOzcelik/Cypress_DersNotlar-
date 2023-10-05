/// <reference types="cypress" />

describe('IFrame',()=>{

    it('IFrame Test',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/iframe')
        /*
        1) Plugin indir
            https://www.npmjs.com/package/cypress-iframe bu adresden terminal e yaz
            
            npm install -D cypress-iframe     indirsin plugin i

        2) import plugin
            support -> e2e.js dosya icerisine 
            import 'cypress-iframe';    ekle

        3) Bu işlemlerden sonra cy.frameLoaded() ve cy.iframe()
             komutlarını kullanabileceğiz    
        */

             cy.frameLoaded('#mce_0_ifr')  // bu locate de ki iframe girdik
             //driver.switchto.frame(locate) -> selenium da bu şekilde tanımlıyorduk
             
             cy.iframe().find('p').clear()
             //cy.iframe() --> ifreme git
             // find('p') --> p tagını bul
             // clear() ordaki yazı sil

            cy.iframe().find('p').type('hello World').should('include.text','hello World')
            // yazıyı gönderdik ve assert ettik
    
    })
    
    it('',()=>{
    
        
    })
    
    
    it('',()=>{
        
            
    })
    
    
    
    })