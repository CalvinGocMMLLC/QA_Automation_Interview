
/**
 * @description This POM represents the a viewer's view of a broadcast
 *
 */
import { expect, type Locator, type Page } from '@playwright/test';

export class RoomPagePOM {
    readonly page: Page
    readonly video: Locator
    readonly userInUserList: Locator

    constructor(page: Page) {
        this.page = page
        this.video = page.getByTestId("video")
        this.userInUserList = page.locator('.UserListContent .username')
    }

    async displayVideoOptions() {
        await expect(this.video).toBeVisible()
        await this.video.click()
    }

    async findUsersCount() {
        return this.userInUserList.count()
    }

    async selectUserByIndex(index: number) {
        this.userInUserList.nth(index).click()
    }
}
