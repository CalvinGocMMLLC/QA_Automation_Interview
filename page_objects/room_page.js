
/**
 * @description This POM represents the a viewer's view of a broadcast
 *
 */
const commands = {
    displayVideoOptions() {
        return this.waitForElementVisible('@video').click({selector: '@video', suppressNotFoundErrors: false, index: 0})
    },
    async findPMCount() {
        let count = 0
        await this.api.elements('@pmSelector', async function (results) {
            count = results.value.length
        })
        return count
    }
}

const selectors = {
    video: {
        locateStrategy: 'css selector', 
        selector: 'div.videoPlayerDiv > div.video-js > video, div.videoPlayerDiv > img'
    },
    pmSelector: {
        locateStrategy: 'css selector',
        selector: '#UserListTab'
    }
}

module.exports = {
    commands: [commands],
    elements: [selectors]
}