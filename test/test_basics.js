describe(`Test basic functionality of the chaturbate homepage`, function () {

    before(function (browser) {
        browser.url(browser.launch_url)
        browser.page.terms_and_conditions().acceptTerms() //TODO: fix this function
    })

    test('Click a random room', function (browser) {
        //TODO: Implement a test that randomly picks a room from the homepage to click into 
    })


    test('Confirm video element is shown in room', function (browser) {
        //TODO: confirm while in random room the video element is displayed
    })
})
