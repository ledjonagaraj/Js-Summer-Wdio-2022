/**
 * Verify current Date is displayed on Sign up page
 * 
 *  date = current date
 *  year = current year
 * 
 */

/**
 * Verify current is Selected in Time Machine calendar
 * 
 * 1. darksky.net
 * 2. Click Time Machine button
 * 3. Verify current date is selected/highlighted
 */

const { expect } = require("chai");
const moment = require("moment");

describe('Practice moments', () => {
    it('Verify current is Selected in Time Machine calendar', async () => {

        // 1. Launch darksky.net
        await browser.url('https://www.darksky.net/');
        await browser.pause(3000);

        // 2. Click Time Machine button
        // await $('=TIME MACHINE').scrollIntoView();
        await $('=TIME MACHINE').click();
        await browser.pause(2000);

        // 3. Verify current date is selected/highlighted
        const highlightedDateOnWeb = await $('//td[@class="is-today"]//button').getText();

        const currentDate = moment().date();

        expect(Number(highlightedDateOnWeb), 'Highlighted date is not current date').to.equal(currentDate);

    })

});