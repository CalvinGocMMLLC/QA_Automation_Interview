
/**
 * @description This POM represents the a viewer's view of a broadcast
 *
 */
const commands = {

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