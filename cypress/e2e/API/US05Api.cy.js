/// <reference types="cypress" />

describe('US05:Admin, Dean leri görebilmeli ve silebilmeli',()=>{

    it('TC01 Görebilmeli',()=>{
        //Güncel Token Al
        const tokenUrl='https://managementonschools.com/app/auth/login'
        const username='AdminSamet'
        const password='Ab142790'
        const requestBody={username:username,password:password}
        let authToken
        cy.request({
            method:'POST',
            url:tokenUrl,
            body:requestBody,
        }).then((response)=>{
           expect(response.status).to.equal(200)
            authToken=response.body.token})
        // ÖNEMLİ aşağıdaki işleme devam etmek token i kullanmak icin üstteki request icinde devam edilecek    
        //tüm dean leri apı ile isteyelim    
        const tumDeanUrl='https://managementonschools.com/app/dean/getAll'
        
        cy.then(()=>{
            cy.request({
                url:tumDeanUrl,
                method:'GET',
                headers: {Authorization: authToken}
            }).then((response)=>{
                console.log(response)
                expect(response.status).to.equal(200)
                //body boş olmadığını dogruladık deanlere ulaştık
                expect(response.body).to.not.empty 
                //expect(response.body.length).to.equal(1023)  degişebileceği icin yoruma aldık
            
            })
           })
           
    
    
        })
    
    it.only('TC02 Silebilmeli',()=>{
        //Güncel Token Al
        const tokenUrl='https://managementonschools.com/app/auth/login'
        const username='AdminSamet'
        const password='Ab142790'
        const requestBody={username:username,password:password}
        let authToken
        cy.request({
            method:'POST',
            url:tokenUrl,
            body:requestBody,
        }).then((response)=>{
           expect(response.status).to.equal(200)
            authToken=response.body.token})
        let Id=36 // Id yi güncelle ver ki bulamadım diye hata vermesin
        const deleteDeanUrl=`https://managementonschools.com/app/dean/delete/${Id}`
        cy.then(()=>{
            cy.request({
                url:deleteDeanUrl,
                method:'DELETE',
                headers: {Authorization: authToken}                
            }).then((response)=>{
                expect(response.status).to.equal(200)
            })

        })    

    
  })
    })