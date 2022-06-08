
// Test para comprobar que la página va hacia el inicio del proyecto.
describe('Página inicio', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:4200') 
    })
  })


// Test para comprobar que los teléfonos que hay en inicio sean +012 345 6789

describe('Probar teléfono', () => {
    it('Teléfonos válidos', () => {
        cy.get('.col-lg-5 > .me-4 > :nth-child(2)').contains("+012 345 6789");
        cy.get('.container-fluid > .container > .row > :nth-child(1) > :nth-child(4)').contains("+012 345 6789");
    })
  })

// Test para comprobar que cada enlace del header se redirige al sitio que le corresponde

describe('Testeo Enlaces Header ', () => {
    it('Lista DropDown', () => {
        cy.get('a.dropdown-item').contains("Lista de rios").click({force: true}).location()
        cy.get('a.dropdown-item').contains("Página error (404)").click({force: true}).location()
    })
})

// Test para comprobar que los enlaces de footer funcionan y redirigen al sitio elegido

describe('Testeo Enlaces Footer ', () => {

    it('Enlace footer Recientes', () => {
        cy.get(':nth-child(2) > [routerlink="/about"]').click().location()
        cy.get('.container > .row > :nth-child(2)').contains("Contacta con nosotros").click().location()
        cy.get(':nth-child(2) > [routerlink="/courses"]').click().location()
        cy.get(':nth-child(2) > [routerlink="/courses"]').click().location()
        cy.get(':nth-child(2) > [routerlink="/courses"]').click().location()
    })

// Test en la zona de link populares del footer

it('Enlace footer Popular', () => {
    cy.get(':nth-child(3) > [routerlink="/about"]').click().location()
    cy.get('.container > .row > :nth-child(3)').contains("Contacta con nosotros").click().location()
    cy.get(':nth-child(3) > [routerlink="/courses"]').click().location()
    cy.get(':nth-child(3) > [routerlink="/courses"]').click().location()
    cy.get(':nth-child(3) > [routerlink="/courses"]').click().location()
})

})

// Test para comprobar que los atributos de formularios en la página de inicio son del tipo correspondiente

describe('Testeo Atributos formulario ', () => {

    it('Formulario Cita', () => {
        cy.get('#gname').invoke('attr', 'type').should('eq', 'text')
        cy.get('#gmail').invoke('attr', 'type').should('eq', 'email')
        cy.get('#cname').invoke('attr', 'type').should('eq', 'text')
        cy.get('#cage').invoke('attr', 'type').should('eq', 'number')
    })
    


})