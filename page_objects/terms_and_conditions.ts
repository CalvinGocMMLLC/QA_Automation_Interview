/**
 * @description This POM represents the "Terms and Conditions" overlay that is displayed on multiple pages of the website.
 *
 */
import { expect, type Locator, type Page } from '@playwright/test';

export class TermsAndConditionsModal {
    readonly page: Page
    readonly agreeButton: Locator

    constructor(page: Page) {
        this.page = page
        this.agreeButton = page.locator("i_am_a_bad_selector") //TODO 1
    }
}