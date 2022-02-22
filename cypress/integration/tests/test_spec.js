/// <reference types="cypress" />
import HomePage from '../pages/homePage'
import AboutPage from '../pages/about/aboutPage'
import FoundersPage from '../pages/about/foundersPage'
import Common from '../global/helpers/common'

const hp = new HomePage
const ap = new AboutPage
const fp = new FoundersPage
const common = new Common

beforeEach(() => {
    cy.visit('/')
})

it('Verify user can access Founders Page', function() {
    hp.navigateToAboutUsPage()
    ap.learnMoreAboutCoFounders()
    cy.url().should('include', common.foundersPageEndpoint)
})

it('Verify user can write founders info to a CSV and validate the data', function() {
    hp.navigateToAboutUsPage()
    ap.learnMoreAboutCoFounders()
    fp.writeInfoToCSVAndValidate()
})

