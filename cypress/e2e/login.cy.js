describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN');//указываем верный логин
        cy.get('#pass').type('USER_PASSWORD');//указываем верный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
   it(' Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('USER_LOGIN');//указываем почту
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
   it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN');//указываем верный логин
        cy.get('#pass').type('USER_PASSWORD');//указываем неверный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
   it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN');//указываем неверный логин
        cy.get('#pass').type('USER_PASSWORD');//указываем верный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
   it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN');//указываем логин без @
        cy.get('#pass').type('USER_PASSWORD');//указываем верный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    })
   it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN');//указываем логин со строчными буквами
        cy.get('#pass').type('USER_PASSWORD');//указываем верный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 })
