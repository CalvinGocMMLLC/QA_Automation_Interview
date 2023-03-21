/**
 * @description This POM represents the "Terms and Conditions" overlay that is displayed on multiple pages of the website.
 *
 */
 const commands = {
    acceptTerms() {
        //this.pause() //Can use a .pause() to freeze the test at a given point
        return this.waitForElementVisible('@agree').click('@agree')
    },
}

const selectors = {
    agree: {
        locateStrategy: 'css selector', //can use 'xpath'
        selector: '{selector}' //TODO add selector for agree 
    }
}

module.exports = {
    commands: [commands],
    elements: [selectors]
}