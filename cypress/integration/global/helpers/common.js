
class Common {

    aboutUsPageEndpoint = '/about'
    foundersPageEndpoint = '/about/founders'

    waitForElementToBeVisible(element) {
        cy.get(element, { timeout: 10000 }).should('be.visible');
    }

}

export default Common