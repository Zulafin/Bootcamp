import loginPage from "../../support/pageObjects/loginPage"
import loginData from "../../fixtures/loginData.json"

describe ('OrangeHRM Login Feature', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('TC_001 - Login dengan username dan password valid', () => {
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.validPassword)

        //intercept
        loginPage.interceptLogin()
        
        loginPage.Login_btn ()
        loginPage.verifyIntercept()
        loginPage.verifyLoginSuccess()
    })

    it('TC_002 - Login dengan username & password tidak valid', () => {
        loginPage.inputUsername(loginData.invalidUsername)
        loginPage.inputPassword(loginData.invalidPassword)
        loginPage.Login_btn()
        loginPage.verifyUsernamePasswordError ()
    })

    it('TC_003 - Login gagal dengan password salah', () => {
        loginPage.inputUsername(loginData.invalidUsername) //username salah
        loginPage.inputPassword(loginData.validPassword) //password valid
        loginPage.Login_btn()
        loginPage.verifyUsernamePasswordError ()
    });

    it('TC_004 - Login dengan username valid dan password salah', () => {
        loginPage.inputUsername(loginData.validUsername) //username valid
        loginPage.inputPassword(loginData.invalidPassword) //password salah
        loginPage.Login_btn()
        loginPage.verifyUsernamePasswordError ()
    })

    it('TC_005 - Login tanpa mengisi username & password', () => {
        loginPage.Login_btn()
        loginPage.verifyUsernamePasswordRequiredError ()
    })

    it('TC_006 - Login dengan username valid & password kosong', () => {
        loginPage.inputUsername(loginData.validUsername)
        loginPage.Login_btn()
        loginPage.verifyUsernamePasswordRequiredError ()
    })

    it('TC_007 - Login dengan password valid & username kosong', () => {
        loginPage.inputPassword(loginData.validPassword)
        loginPage.Login_btn()
        loginPage.verifyUsernamePasswordRequiredError ()
    })
    
    it('TC_008 - Forgot Password dengan username valid', () => {
        loginPage.clickForgotPassword()
        loginPage.inputUsername(loginData.validUsername)
        loginPage.Login_btn()
        loginPage.verifyResetPasswordSuccess ()
    })

    it('TC_009 - Forgot Password tanpa username', () => {
        loginPage.clickForgotPassword()
        loginPage.Login_btn()
        loginPage.verifyResetPasswordError()
    })
})