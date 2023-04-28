
/**
 * @description This POM represents the home page of chaturbate.com
 *
 */
 const commands = {
    todoBFunction() {
        //TODO: B
    },

    randomNumber(topNumber) {
        return Math.floor(Math.random() * topNumber)
    }
}
const selectors = {
    roomCard: {
        locateStrategy: 'css selector', 
        selector: '#room_list > li.roomCard'
    },
}

module.exports = {
    commands: [commands],
    elements: [selectors]
}