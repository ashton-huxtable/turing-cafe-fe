describe('Main page user flow', () => {
    beforeEach(() => {
        cy.fixture('reservations').then((reservations) => {
            const baseUrl = 'http://localhost:3001/api/v1/';
            cy.intercept('GET', `${baseUrl}/reservations`, {
                statusCode: 200,
                body: reservations
            })
        })
        cy.visit('http://localhost:3000/')
    })

    it('Should display a title', () => {
        cy.contains('Turing Cafe Reservations')
    })

    it('Should display reservations', () => {
        cy.get('article')
            .contains('Christie')
            .get('button').contains('Cancel')
    })

    it('Should display a form to make reservations and allow a user to add reservations', () => {
        cy.get('input[name="name"]')
            .type('Ashton')
            .should('have.value', 'Ashton')
            .get('input[name="date"]')
            .type('07/21')
            .should('have.value', '07/21')
            .get('input[name="time"]')
            .type('6:30')
            .should('have.value', '6:30')
            .get('input[name="number"]')
            .type('{uparrow}')
            .should('have.value', '1')
            .get('button').contains('Make Reservation').click();
    })

})