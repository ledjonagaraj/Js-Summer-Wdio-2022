const { expect } = require("chai");

describe('Dropdown with non-select tag', () => {
    it('Verify the temp value changes correct when user changes the temp unit', async () => {
        /**
         * Change the temp-unit in darksky.net
         * 
         * 1. Launch darksky.net
         * 2. Store the current-temp in a variable(fT)
         * 3. using tempConversion formula to convert fT into celsius (cT)
         * 4. Change temp unit to "˚C, mph"
         * 5. Verify the current-temp on web is equals to cT
         * 
         * cT = (fT - 32) × (5/9)
         * 
         */
        await browser.url('https://www.darksky.net/')

        await browser.pause(3000)

        const fText = await $('//span[@class="summary swap"]').getText();



    });
    
});