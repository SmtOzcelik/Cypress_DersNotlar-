/// <reference types="cypress" />

describe('Selectors Example',()=>{

    it('Css Seloctors',()=>{
    
    cy.visit('https://www.amazon.com/')    
    //1)By Tag Name   sadece tag name al kullan
        cy.get('input')

    //2)By id   id al başına # koy
        cy.get('#twotabsearchtextbox')

    //3)By Class class al başina . koy
        cy.get('.nav-search-field ')

    //4)By Attribute name and Value  
    // En genel hali tag[attribute='value']
    cy.get("input[type='text']") // tırnaklar tek çift değişebilir

    //5) 2 attribute [attribute='value'][attribute='value']
        cy.get("[type='text'][id='twotabsearchtextbox']") 


    })
    
    it('XPath',()=>{
    /*
        1-npm install -D cypress-xpath  plugin eklemek icin terminal yaz
        2-require('cypress-xpath'); copy solda bulunan
        e2e-->support-->e2e.js icine yapıştır

        Kullanimi 
        cy.xpath("//tag[@attribute='value']").should... gibi

        Bazen problemler cıkardığı icin önerilmiyor


    */
        
    })
    
    
  
    
    
    })