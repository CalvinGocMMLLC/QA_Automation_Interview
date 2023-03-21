
/**
 * @description This POM represents the home page of chaturbate.com
 *
 */
 const commands = {
    clickRandomRoom() {
        //TODO: Implement this function to click on a random room of the homepage
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