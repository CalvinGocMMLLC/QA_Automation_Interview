
/**
 * @description This POM represents the a viewer's view of a broadcast
 *
 */
const commands = {
    displayVideoOptions() {
        return this.waitForElementVisible('@video').click({selector: '@video', suppressNotFoundErrors: false, index: 0})
    },
}

const selectors = {
    video: {
        locateStrategy: 'css selector', 
        selector: 'div.videoPlayerDiv > div.video-js > video, div.videoPlayerDiv > img'
    }
}

module.exports = {
    commands: [commands],
    elements: [selectors]
}