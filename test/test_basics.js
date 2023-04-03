describe(`Test basic functionality of the chaturbate homepage`, function () {

    before(function (browser) {
        browser.url(browser.launch_url)
        browser.page.terms_and_conditions().acceptTerms() //TODO: A
    })

    test('Complete TODO: B task here', function (browser) {
        //TODO: B
    })


    test('Complete TODO: C task here', function (browser) {
        //TODO: C
    })
})
