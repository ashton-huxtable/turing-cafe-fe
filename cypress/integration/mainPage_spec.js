describe('Main page user flow', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Should display a title', () => {
        cy.contains('Turing Cafe Reservations')
    })

    it('Should display a form to make reservations', () => {
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
    })

    it('Should be able to submit the form', () => {
        cy.get('button').contains('Make Reservation').click();
    })
})