
/**
 * @description This POM represents the home page of chaturbate.com
 *
 */
 const commands = {
    todoBFunction() {
        //TODO: B
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