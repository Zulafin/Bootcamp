# Quiz 3 - Cypress Automation (Login OrangeHRM)

Repository ini berisi automation testing menggunakan **Cypress** untuk menguji **fitur Login pada OrangeHRM**.  
Automation dibuat menggunakan format it block, dengan total **8 test case**.  
Semua test case sudah dijalankan dan hasilnya **100% Passed**.

## Struktur Project
- `cypress/e2e/3-test/login.cy.js` → berisi automation script untuk fitur login OrangeHRM

## Test Case (Login OrangeHRM)

1. **TC01** - Login dengan username dan password valid → **Passed**
2. **TC02** - Login dengan username & password tidak valid → **Passed**
3. **TC03** - Login gagal dengan username salah & password benar → **Passed**
4. **TC04** - Login dengan username valid & password salah → **Passed**
5. **TC05** - Login tanpa mengisi username & password → **Passed**
6. **TC06** - Login dengan username valid & password kosong → **Passed**
7. **TC07** - Login dengan password valid & username kosong → **Passed**
8. **TC08** - Forgot Password dengan username valid → **Passed** 
