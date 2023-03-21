
/**
 * @description This POM represents the home page of chaturbate.com
 *
 */
 const commands = {
    clickRandomRoom() {
        //TODO: Implement this function to click on a random room of the homepage
    },

    getCardNameByIndex(index){
        return this.getText({selector: '@roomCardStreamerName', index: index})
    }
}

const selectors = {
    roomCard: {
        locateStrategy: 'css selector', 
        selector: '#room_list > li.roomCard'
    },
    roomCardStreamerName: {
        locateStrategy: 'css selector', 
        selector: '#room_list div.title > a'
    },
}

module.exports = {
    commands: [commands],
    elements: [selectors]
}