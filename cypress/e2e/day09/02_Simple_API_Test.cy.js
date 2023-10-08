/// <reference types="cypress" />

describe('Simple API Test',()=>{
    const requestURL='https://jsonplaceholder.cypress.io/comments'

    it('Header Assert 1',()=>{
        cy.request(requestURL).its('headers').its('cf-cache-status').should('include','DYNAMIC')
        cy.request(requestURL).its('headers').its('connection').should('include','keep-alive')
        cy.request(requestURL).its('headers').its('content-type').should('include','application/json; charset=utf-8')
    
    
    })
    
    it('Header Assert 2',()=>{
        cy.request({
            url:requestURL,
            //url:'https://jsonplaceholder.cypress.io/comments' şeklinde de yazılabilir

            method:'GET' }).its('headers').its('content-type').should('include','application/json; charset=utf-8')
        
    })
    
    })