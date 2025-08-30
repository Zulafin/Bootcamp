import loginPage from "../../support/pageObjects/loginPage"
import loginData from "../../fixtures/loginData.json"
import menuPage from "../../support/pageObjects/menuPage"
import menuData from "../../fixtures/menuData.json"

describe ('OrangeHRM Directory Menu', () => {
    beforeEach(() => {
        loginPage.visit()
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.Login_btn()
        loginPage.interceptLogin()
        loginPage.verifyIntercept()
        loginPage.verifyLoginSuccess()

        //menu directory
        menuPage.interceptDirectory()
        menuPage.directoryMenu()
        menuPage.verifyInterceptDirectory()
        menuPage.verifyDirectoryPage()
    });

    it('TC_001 - Akses Menu Directory', () => {
        menuPage.verifyDirectoryPage()
    })

    it('TC_002 - Mencari Data Karyawan menggunakan Data Lengkap', () => {
        menuPage.inputEmployeeName(menuData.employee1.employeeName)
        menuPage.selectEmployeeName(menuData.employee1.employeeName, menuData.employee1.completeEmployeeName)
        menuPage.selectJobTitle(menuData.employee1.jobTitle)
        menuPage.selectLocation(menuData.employee1.location)
        menuPage.Search_btn()
        menuPage.verifyDataResult(
            menuData.employee1.completeEmployeeName, 
            menuData.employee1.jobTitle, 
            menuData.employee1.location
        )
    })

    it('TC_003 - Mencari Data Karyawan menggunakan Nama', () => {    
        menuPage.inputEmployeeName(menuData.employee1.employeeName)
        menuPage.selectEmployeeName(menuData.employee1.employeeName, menuData.employee1.completeEmployeeName)
        menuPage.Search_btn()
        menuPage.verifyDataResult(
            menuData.employee1.completeEmployeeName, 
            menuData.employee1.jobTitle, 
            menuData.employee1.location
        )
    })

    it('TC_004 - Input Nama Karyawan tanpa select Nama Lengkap', () => {
        menuPage.inputEmployeeName(menuData.employee1.employeeName)
        menuPage.Search_btn()
        menuPage.verifyErrorMessage()
    })

    it('TC_005 - Mencari Data Karyawan menggunakan Job Title', () => {
        menuPage.selectJobTitle(menuData.employee2.jobTitle)
        menuPage.Search_btn()
        menuPage.verifyDataResult(
            menuData.employee2.completeEmployeeName, 
            menuData.employee2.jobTitle, 
            menuData.employee2.location
        )
    })

    it('TC_006 - Mencari Data Karyawan menggunakan Job Title (Not Found)', () => {
        menuPage.selectJobTitle(menuData.employee3.jobTitle)
        menuPage.Search_btn()
        menuPage.verifyNotFoundToast()
    })

    it('TC_007 - Mencari Data Karyawan menggunakan Location', () => {
        menuPage.selectLocation(menuData.employee2.location)
        menuPage.Search_btn()
        menuPage.verifyDataResult(
            menuData.employee2.completeEmployeeName, 
            menuData.employee2.jobTitle, 
            menuData.employee2.location
        )
    })

    it('TC_008 - Mencari Data Karyawan menggunakan Location (Not Found)', () => {
        menuPage.selectLocation(menuData.employee3.location)
        menuPage.Search_btn()
        menuPage.verifyNotFoundToast()
    })

    it('TC_009 - Menghapus semua isi kolom', () => {
        menuPage.inputEmployeeName(menuData.employee1.employeeName)
        menuPage.selectEmployeeName(menuData.employee1.employeeName, menuData.employee1.completeEmployeeName)
        menuPage.selectJobTitle(menuData.employee1.jobTitle)
        menuPage.selectLocation(menuData.employee1.location)
        menuPage.Reset_btn()
    })
})