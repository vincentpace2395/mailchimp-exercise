import AboutPage from "./about/aboutPage"
import Common from "../global/helpers/common"

const common = new Common

class HomePage {

    navigateToAboutUsPage() {
        cy.visit(common.aboutUsPageEndpoint)

        return new AboutPage
    }
}

export default HomePage