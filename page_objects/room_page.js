
/**
 * @description This POM represents the a viewer's view of a broadcast
 *
 */
const commands = {
    getRoomName() {
        this.url((url)=>{
            console.log(url.value.split('/'))
            return url.value.split('/')[1]
        })
    },
}

const selectors = {
    video: {
        locateStrategy: 'css selector', 
        selector: 'div.videoPlayerDiv > div.video-js > video'
    }
}

module.exports = {
    commands: [commands],
    elements: [selectors]
}