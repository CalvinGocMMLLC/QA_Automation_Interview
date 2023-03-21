/**
 * @description This POM represents the "Terms and Conditions" overlay that is displayed on multiple pages of the website.
 *
 */
 const commands = {
    acceptTerms() {
        return this.waitForElementVisible('@agree', data.WAIT.FIVE_SECONDS).click('@agree')
    },
}

const selectors = {
    agree: {
        locateStrategy: 'xpath', //can use 'css selector'
        selector: '' //TODO add selector for agree 
    }
}

module.exports = {
    commands: [commands],
    elements: [selectors]
}