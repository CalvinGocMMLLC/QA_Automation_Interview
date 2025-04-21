import { Page } from "@playwright/test"
import * as dotenv from 'dotenv';


export async function logIn(page: Page) {
    dotenv.config()
    await page.context().addCookies([
        {
            name: "sessionid",
            value: process.env.LOGIN_TOKEN!,
            domain: ".chaturbate.com",
            path: "/",
            httpOnly: true,
            secure: true,
            sameSite: "None"
        }
    ])
}