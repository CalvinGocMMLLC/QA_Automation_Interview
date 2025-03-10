import { test, expect } from '@playwright/test';
import { TermsAndConditionsModal } from '../page_objects/terms_and_conditions';
import { HomePagePOM } from '../page_objects/home_page';
import { RoomPagePOM } from '../page_objects/room_page';

test.describe("Test basic functionality of Chaturbate homepage", ()=>{
  test.describe.configure({ mode: 'serial' });

  test('Complete TODO tasks', async ({page}) => {
    await page.goto('https://chaturbate.com')

    const terms_and_conditions_modal = new TermsAndConditionsModal(page)

    await terms_and_conditions_modal.agreeButton.click() //TODO 1 inside terms_and_conditions POM

  
    await test.step('Complete TODO: 2 task here', async() => {
      //TODO: 2
    })
  
  
    await test.step('Complete TODO: 3 task here', async() => {
      //TODO: 3
    })

  })
})


