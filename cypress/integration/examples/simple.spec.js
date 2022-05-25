it('should visit home', () => {
    cy.visit('http://localhost:4200');
});

it('telefono válido', () => {
    cy.get('.col-lg-5 > .me-4 > :nth-child(2)').contains("+012 345 6789");
})