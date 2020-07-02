import {registerPage} from '../data/selectors';
const general = require('../data/data.json').general;

class BasePage{
 register(){
   browser.url('/user/register');
   $(registerPage.firstNameField).setValue(general.firstName);
   $(registerPage.lastNameField).setValue(general.lastName);
   $(registerPage.phoneField).setValue(general.phone);
   $(registerPage.emailField).setValue(general.email);
   $(registerPage.passwordField).setValue(general.password)
 }
}
export default new BasePage();