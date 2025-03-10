
/**
 * @description This POM represents the home page of chaturbate.com
 *
 */
import { type Locator, type Page } from '@playwright/test';

export class HomePagePOM {
    readonly page: Page
    readonly roomCard: Locator

    constructor(page: Page) {
        this.page = page
        this.roomCard = page.getByTestId('room-card')
    }

    randomNumber(topNumber) {
        return Math.floor(Math.random() * topNumber)
    }
}