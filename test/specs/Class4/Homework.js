
// Practice:

/**
 * Change the temp-unit in darksky.net
 * 
 * 1. Launch darksky.net
 * 2. Change temp unit to "˚C, m/s"
 * 
 */

describe('Dropdown with non-select tag', () => {
    it('Change the temp unit in darksky.net', async () => {
        /**
         * Change the temp-unit in darksky.net
         *
         * 1. Launch darksky.net
         * 2. Chanhge temp unit to "C, m/s"
         */
        // 1. Launch darksky.net
        await browser.url('https://www.darksky.net/')
        
        await browser.pause(3000);

        await $('//div[@id="header"]//div[contains(@class,"selectric-units")]//div[@class="selectric"]//b').click();

        await browser.pause(1000);

        await $('//div[contains(@class, "selectric-open")]//li[contains(text(), "˚C") and contains(text(), "mph")]').click();

        await browser.pause(10000);
    });
});