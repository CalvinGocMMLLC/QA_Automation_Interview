import { test, expect } from '@playwright/test';
import { TermsAndConditionsModal } from '../page_objects/terms_and_conditions';
import { HomePagePOM } from '../page_objects/home_page';
import { RoomPagePOM } from '../page_objects/room_page';

test.describe("Test basic functionality of Chaturbate homepage", ()=>{
  test.describe.configure({ mode: 'serial' });

  test('Complete TODO tasks', async ({page}) => {
    await page.goto('https://chaturbate.com')

    const terms_and_conditions_modal = new TermsAndConditionsModal(page)

    await terms_and_conditions_modal.agreeButton.click() //TODO A inside terms_and_conditions POM

  
    await test.step('Complete TODO: B task here', async() => {
      //TODO: B
    })
  
  
    await test.step('Complete TODO: C task here', async() => {
      //TODO: C
    })

  })
})


