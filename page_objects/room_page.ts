
/**
 * @description This POM represents the a viewer's view of a broadcast
 *
 */
import { expect, type Locator, type Page } from '@playwright/test';

export class RoomPagePOM {
    readonly page: Page
    readonly video: Locator
    readonly pmSelector: Locator

    constructor(page: Page) {
        this.page = page
        this.video = page.locator('div.videoPlayerDiv > div.video-js > video, div.videoPlayerDiv > img')
        this.pmSelector = page.locator('#UserListTab')
    }

    async displayVideoOptions() {
        await expect(this.video).toBeVisible()
        await this.video.click()
    }

    async findPMCount() {
        return this.pmSelector.count()
    }

    async openIndexPM(index: number) {
        this.pmSelector.nth(index).click()
    }
}
