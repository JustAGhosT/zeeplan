import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("http://localhost:3000/proposal")

        # Take a screenshot before clicking
        await page.screenshot(path="/home/jules/verification/verification_before_click.png")

        # Wait for the button to be visible and then click it
        await page.wait_for_selector('[data-testid="fab-open-controls"]', state='visible')
        await page.click('[data-testid="fab-open-controls"]')

        # Wait for the modal to be visible
        await page.wait_for_selector('[role="dialog"]', state='visible')

        # Now interact with sliders inside the modal
        # Example: Drag the 'Number of Animals' slider
        # The selector needs to be specific to the slider input within the modal
        slider_selector = '[role="dialog"] >> text=Number of Animals >> .. >> input[type="range"]'

        # Get the bounding box of the slider to calculate drag coordinates
        slider = await page.query_selector(slider_selector)
        if slider:
            box = await slider.bounding_box()
            if box:
                # Drag from the middle to the right
                await page.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2)
                await page.mouse.down()
                await page.mouse.move(box['x'] + box['width'], box['y'] + box['height'] / 2)
                await page.mouse.up()

        await page.screenshot(path="/home/jules/verification/verification.png")
        await browser.close()

asyncio.run(main())
