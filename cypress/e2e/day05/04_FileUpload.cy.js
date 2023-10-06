/// <reference types="cypress" />
/*
https://www.npmjs.com/package/cypress-file-upload sitesinden pulagin al
npm install --save-dev cypress-file-upload
import 'cypress-file-upload'  support->e2e.js dosyasına ekle


*/
describe('File Upload',()=>{
    
    //Dosya yükleme
    //fixture class ındaki dosyaları alir
    //dosya yolu degil dosya ismi verilecek

    it('Single File Upload',()=>{
       
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const path1="ISTQB Sertifika.png" // fixtures olan dasya yı ismi ile alır
        cy.get('#filesToUpload').attachFile(path1)

        cy.get('#fileList > li').should('include.text','ISTQB Sertifika.png')
        cy.get(':nth-child(6) > strong').should('include.text','Files You Selected:')
    })
    
    it('Multiple File Upload 1',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const path1="ISTQB Sertifika.png"
        const path2="login.png"

        cy.get('#filesToUpload').attachFile(path1).wait(2000).attachFile(path2)
    
    
    })
    
    
    it('Multiple File Upload 1',()=>{
    
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const path1="ISTQB Sertifika.png"
        const path2="login.png"
        
        cy.get('#filesToUpload').attachFile([path1,path2])

        cy.get('#fileList > :nth-child(1)').should('include.text','ISTQB')
        cy.get('#fileList > :nth-child(2)').should('contain.text','login')
        //Assert de have.text aynısı olacak contain.text ve include.text parça olabilir

    })

    it.only('OverWrite File Name',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const path1="ISTQB Sertifika.png"
        cy.get('#filesToUpload').attachFile({filePath: path1, fileName:'image.jpg'})
    
})

    
    })