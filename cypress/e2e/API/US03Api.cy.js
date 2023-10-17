/// <reference types="cypress" />

describe('US03:Kullanıcılar sayfadan mesaj gönderebilmelidir',()=>{

    it('TC01 API Post test',()=>{
        const tokenn='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pblNhbWV0IiwiaWF0IjoxNjk3MjAwMzU3LCJleHAiOjE2OTcyMDg5OTd9.ErRjt0snr2kpegQCNfQI7doHD6bTzHCjPef7q66-PgExxuefgtUPL16vgLCfZIs0Kdwc0bt4_zp__YxCHa0pIA'
        const urlPost='https://managementonschools.com/app/contactMessages/save'
        const contactBody={
            "email": "smt@gmail.com",
            "message": "Hello04 World@",
            "name": "samet",
            "subject": "java"
          }
        
        cy.request({
            url:urlPost,
            method:'POST',
            auth:{"username":"AdminSamet","password":"Ab142790"},
            body:contactBody,
            token:tokenn
        }).then((response)=>{
            console.log(response)
            expect(response.body.message).to.equal('Contact Message Created Successfully')
            expect(response.body.httpStatus).to.equal('CREATED')
            expect(response.body.object.name).to.equal('samet')
            expect(response.body.object.subject).to.equal('java')
            expect(response.statusText).to.equal('OK')
            expect(response.status).to.equal(200)
        })
    
        
    })
    
   
    
    })