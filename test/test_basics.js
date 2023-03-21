describe(`Test basic functionality of the chaturbate homepage`, function () {

    before(function (browser) {
        browser.url(browser.launch_url)
        browser.page.terms_and_conditions().acceptTerms()
    })

    test('Click a random room', function (browser) {
        //TODO: Implement a test that randomly picks a room from the homepage to click into 
        // and confirms the room entered matches the name on the clicked card
    })


    test('Confirm video element is shown in room', function (browser) {
        //TODO: confirm while in random room the video element is displayed
    })
})
