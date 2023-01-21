export default class Page {
    open(path) {
        return cy.visit(path)
    }

    get path() { return cy.location('pathname')}
}