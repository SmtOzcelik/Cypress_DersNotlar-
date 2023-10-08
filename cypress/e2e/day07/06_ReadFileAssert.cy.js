/// <reference types="cypress" />

describe('Read File Assert',()=>{

    it('Assert',()=>{

        cy.readFile('./cypress/fixtures/users.json').then((userdata)=>{
            expect(userdata[0].username).to.equal('AdminSamet')
            expect(userdata[0].surname).to.equal('Gun')
            expect(userdata[1].adress.mahalle).to.equal('demet')
        })
    
    
    })
    
    
    })