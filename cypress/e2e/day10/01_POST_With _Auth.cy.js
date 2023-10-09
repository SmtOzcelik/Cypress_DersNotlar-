/// <reference types="cypress" />

describe('POST with Auth',()=>{

    it('Test',()=>{
        
        cy.request({
            url:"https://restful-booker.herokuapp.com/booking",
            metod:'POST',
            auth:{
                "username" : "admin",
                "password" : "password123"
            },
            body:{
                "firstname": "Samet",
                "lastname": "Tsl",
                "totalprice": 250,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2014-10-10",
                    "checkout": "2014-11-10"
                },
                "additionalneeds": "Breakfast"
            },

            "token": "abc123"

        }).then((response)=>{
            console.log(response)

            expect(response.status).to.equal(200)
            expect(response.body.booking.firstname).to.eq("Samet")
            expect(response.body.booking.lastname).to.eq("Tsl")
            expect(response.body.booking.totalprice).to.eq(111)
            expect(response.body.bookingdates.checkin).to.eq("2014-10-10")

        })
    
    
    })
    
    
    
    
    })