const Homepage = require("../../POM/Hotels/Homepage");

describe('Search Feature', () => {
    it('Verify search page shows correct user entry', async () => {
        const homepage = new Homepage();
        /**
         * Tc-5:
         * 
         * Verify destination and check-in and check-out dates are as user selected
         * 
         * 1. Launch hotels.com
         * 2. Type "man" in destination
         * 3. Select "Manila" from auto-suggestion
         * 4. Select Sep10 to Sep-25 as check-in and check-out respectively
         * 5. Click Search button
         * 6. Verify destination has Manila
         * 7. Verify check-in date in Sep-10
         * 8. Verify check-out date in Sep-25
         * 
         */

        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');

        // 2. Type "man" in destination
        await homepage.enterDestination('man');

        // 3. Select "Manila" from auto-suggestion
        await homepage.selectDestinationFromAutoSuggestion('manChesTER')

        // 4. Select Sep10 to Sep-25 as check-in and check-out respectively
        await homepage.clickOnCalendarButton();

        await homepage.selectCheckInDate('December', '2022', '25');

        await homepage.selectCheckOutDate('January', '2023', '10');

        
    })
});