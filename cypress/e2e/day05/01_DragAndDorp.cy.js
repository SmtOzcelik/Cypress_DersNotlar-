/// <reference types="cypress" />

describe('Drog and Drop',()=>{
    /*
    https://www.npmjs.com/package/@4tw/cypress-drag-drop plugin indir
     npm install --save-dev @4tw/cypress-drag-drop terminale yaz
     import '@4tw/cypress-drag-drop' support-> e2e.js -> buraya yapıştır
    */

    it('DragAndDrop',()=>{
    
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

        cy.get('#column-a')  // sürüklenecek element
        .drag('#column-b')   // sürüklenilecek yer
         
    
    })
    

    
    
    })