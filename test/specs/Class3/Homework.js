const { expect } = require("chai");

/**
 * Tc-1:
 * https://www.darsky.net
 * Verify feelsLikeTempValue is between lowTempValue and highTempValue
 */

/**
 * Tc-2:
 * https://www.darsky.net
 * Verify user can get temperature based on zipcode
 * 
 */

/**
 * Tc-3:
 * https://www.facebook.com
 * 
 * Verify user gets error message when submit empty login form
 * expected error msg -> The email address or mobile number you entered isn't connected to an account.
 * 
 */

/**
 * Tc-4:
 * https://www.facebook.com
 * 
 * Verify empty messenger login flow
 * 1. Click Messenger
 * 2. Verify 'Keep me signed in' is not selected
 * 3. Click 'Log In' button
 * 4. Verify link -> "Find your account and log in" is displayed
 * 5. Verify 'Continue' button is enabled
 * 6. Verify 'Keep me signed in' is not selected
 * 7. Click 'Keep me signed in'
 * 8. Verify 'Keep me signed in' is selected
 * 
 */
    describe('Solving the homework', () => {

        it.only('Tc-1 Verify feelsLikeTempValue is between lowTempValue and highTempValue', async () => {
            /**
             * 1. Launch darsky.net
             * 2. Verify feelsLikeTempValue is displayed
             * 3. Verify lowTempValue is displayed
             * 4. Verify highTempValue is displayed
             * 5. Getting the values for FeelsLike, Low, and High Temperatures
             * 6. If Feels Like Temperature is between Low Temperature and High Temperature clear the search box
             */
            // 1. Launch darksky.net
            await browser.url('https://darksky.net/');

            // 2. Verify feelsLikeTempValue is displayed
            const isFeelsLikeTempValueDisplayed = await $('span[class*="feels-like"]').isDisplayed();
            expect(isFeelsLikeTempValueDisplayed, 'Feels Like temperature value is NOT displayed').to.be.true;

            // 3. Verify lowTempValue is displayed
            const isLowTempValueDisplayed = await $('span[class="low-temp-text"]').isDisplayed();
            expect(isLowTempValueDisplayed, 'Low temperature value is NOT displayed').to.be.true;
          
            // 4. Verify highTempValue is displayed
            const isHighTempValueDisplayed = await $('span[class="high-temp-text"]').isDisplayed();
            expect(isHighTempValueDisplayed, 'Low temperature value is NOT displayed').to.be.true;

            // 5. Getting the values for FeelsLike, Low, and High Temperatures.
            const getValueOfFeelsLike = await $('span[class*="feels-like"]').getValue();
            const getValueOfLowTemp = await $('span[class*="feels-like"]').getValue();
            const getValueOfHighTemp = await $('span[class*="feels-like"]').getValue();

            // 6. If Feels Like Temperature is between Low Temperature and High Temperature clear the search box
            if (getValueOfFeelsLike > getValueOfLowTemp && getValueOfFeelsLike < getValueOfHighTemp){
              await $('input[type="text"]').clearValue();
            }
            
            //expect(getValueOfFeelsLike, 'Feels Like is NOT as expected').to.equal('75˚')
            await browser.pause(5000);
        });

        it('Tc-2 Verify user can get temperature based on zipcode', async () => {
            /**
             * 1. Launch darksky.net
             * 2. Verify Search bar is enabled
             * 3. Clear Search box
             * 4. Entering a value in the search box
             * 5. Clicking in the search button
             */
            //1. Launch darksky.net
        await browser.url('https://darksky.net/');
    
        //2. Verify Search box is enabled
      const searchBox = await $('input[type="text"]');
      const isSearchBoxEnabled = await searchBox.isEnabled()
      expect(isSearchBoxEnabled, 'Search box is NOT enabled').to.be.true;
      
      //3. Clear Search box
      await searchBox.clearValue();

      //4. Entering a value in the search box
      await searchBox.setValue('11105')

      //5. Clicking in the search button
      await $('img[alt="Search Button"]').click();

      await browser.pause(20000);
});

        it('Tc-3: Verify user gets error message when submit empty login form', async () => {
         /**
         * 1. Launch facebook.com
         * 2. Click 'Log In' button
         * 3. Verify user gets error when submit empty login form
         */ 

          //1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

          //2. Click 'Log In' button
        await $('button[name=login]').click();

        //3 Verify user gets error when submit empty login form
        const userGetsErrorWithEmptyLogin = await $('*=num').isDisplayed();
        expect(userGetsErrorWithEmptyLogin, 'User gets does NOT get error').to.be.false;

        await browser.pause(10000);
});

    it('Tc-4: Verify empty messenger login flow', async () => {
        /** 
         * 1. Launch facebook.com
         * 2. Click Messenger
        * 3. Verify 'Keep me signed in' is not selected
        * 4. Click 'Log In' button
        * 5. Verify link -> "Find your account and log in" is displayed
        * 6. Verify 'Continue' button is enabled
        * 7. Verify 'Keep me signed in' is not selected
        * 8. Click 'Keep me signed in'
        * 9. Verify 'Keep me signed in' is selected
        */
       // 1. Launch facebook.com
   await browser.url('https://www.facebook.com/');

     //2. Click Messenger button
     await $('a[title*=Check]').click();
    
     //3. Verify 'Keep me signed in' is not selected
     const keepMeSignedInButton = await $('label[class="uiInputLabelLabel"]');
     const isKeepMeSignedInSelected = await keepMeSignedInButton.isSelected()
     expect(isKeepMeSignedInSelected, 'Keep me signed in button is selected').to.be.false;
     
     //4. Click 'Log In' button
     const LogInButton = await $('button[type=submit]')
     const isLogInEnabled = await LogInButton.isEnabled();
     expect(isLogInEnabled, 'Log In button is enabled').to.be.true;
      
     await LogInButton.scrollIntoView();
     await LogInButton.click();

    //5. Verify link -> "Find your account and log in" is displayed
    const isFindYourAccountAndLogInDisplayed = await $('*=account').isDisplayed();
    expect(isFindYourAccountAndLogInDisplayed, 'Find your account and log in is NOT displayed').to.be.true;
    
    //6. Verify 'Continue' button is enabled
    const isContinueButtonEnabled = await $('button[id=loginbutton]').isEnabled();
    expect(isContinueButtonEnabled, 'Continue button is NOT enabled').to.be.true;

    //7. Verify 'Keep me signed in' is not selected
    const keepMeSignedInButton2 = await $('label[class="uiInputLabelLabel"]');
    const isKeepMeSignedInSelected2 = await keepMeSignedInButton2.isSelected();
    expect(isKeepMeSignedInSelected2, 'Keep me signed in button is selected').to.be.false;

    //8. Click 'Keep me signed in' if is not selected
    if (!isKeepMeSignedInSelected2) {
      await keepMeSignedInButton.click();
    }  

    //9. Verify 'Keep me signed in' is selected
    const isKeepMeSignedInSelected2_afterClick = await $('label[class="uiInputLabelLabel"]').isSelected();
    expect(isKeepMeSignedInSelected2_afterClick, 'Keep me signed in button is NOT selected').to.be.true;

    await browser.pause(10000);
 });

});
