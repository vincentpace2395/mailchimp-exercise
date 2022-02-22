import FoundersPage from "./foundersPage"
import Common from '../../global/helpers/common'

const common = new Common

class AboutPage {

    learnAboutCoFoundersLink = '#content a'
    linkText = 'Learn more about our Co-founders.'

    learnMoreAboutCoFounders() {
        common.waitForElementToBeVisible(this.learnAboutCoFoundersLink)
        cy.get(this.learnAboutCoFoundersLink).contains(this.linkText).click({force: true})

        return new FoundersPage
    }
}

export default AboutPage