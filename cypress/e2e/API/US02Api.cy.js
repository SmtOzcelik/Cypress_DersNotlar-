/// <reference types="cypress" />

describe('US02:Admin Guest User List silebilmeli',()=>{

    it('TC01 API Delete',()=>{
        const tokenn='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pblNhbWV0IiwiaWF0IjoxNjk3MjAwMzU3LCJleHAiOjE2OTcyMDg5OTd9.ErRjt0snr2kpegQCNfQI7doHD6bTzHCjPef7q66-PgExxuefgtUPL16vgLCfZIs0Kdwc0bt4_zp__YxCHa0pIA'

        const urlDelete='https://managementonschools.com/app/guestUser/delete/1656'
    cy.request({
        url:urlDelete,
        method:'DELETE'
    }).then((response)=>{
        console.log(response)
        expect(response.body.message).to.equal('Guest User deleted Successful')
        

    })
    
    
    })
    
    it('',()=>{
    
        
    })
    
    
    
    
    
    })