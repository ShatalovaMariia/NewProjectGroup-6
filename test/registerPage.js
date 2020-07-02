import BasePage from "../pages/Base.page";
import {registerPage} from '../data/selectors';
const expect= require('chai').expect;


describe('verify submit button', function() {
  it('submit btn is clickable ', function() {
    BasePage.register();
    expect($(registerPage.submitButton).isClickable()).true;
    browser.pause(1000)

  });

});
