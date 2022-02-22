
class FoundersPage {

    data = []
    
    firstFounderName = '.bioList__item:nth-child(1) .bioList__content h5'
    firstFounderPosition = '.bioList__item:nth-child(1) .bioList__content p strong'
    firstFounderDescription = '.bioList__item:nth-child(1) .bioList__content .normalize p'
    secondFounderName = '.bioList__item:nth-child(2) .bioList__content h5'
    secondFounderPosition = '.bioList__item:nth-child(2) .bioList__content p strong'
    secondFounderDescription = '.bioList__item:nth-child(2) .bioList__content .normalize p'

    writeInfoToCSVAndValidate() {
            cy.get(this.firstFounderName).invoke('text').then(name => {
                this.data.push(name) 
            })
            cy.get(this.firstFounderPosition).invoke('text').then(position => {
                this.data.push(position)
            })
            cy.get(this.firstFounderDescription).invoke('text').then(description => {
                this.data.push(description) 
            })
            cy.get(this.secondFounderName).invoke('text').then(name => {
                this.data.push(name) 
            })
            cy.get(this.secondFounderPosition).invoke('text').then(position => {
                this.data.push(position)
            })
            cy.get(this.secondFounderDescription).invoke('text').then(description => {
                this.data.push(description) 
            }).then(() => {
                this.writeInfoToCSV(this.data)
            })

        return this
    }

    writeInfoToCSV(info) {
        cy.writeFile('cypress/fixtures/info.csv', info).then(() => {
            this.validateContentsOfCSV()
        })
            
        return this
    }

    validateContentsOfCSV() {
        this.data.map(value => {
            cy.readFile('cypress/fixtures/info.csv').should('contain', value)
        })
    }
}

export default FoundersPage