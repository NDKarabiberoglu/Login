import { errorMessages } from "../../components/register.jsx";
describe("Register Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  })
  describe("Error Messages", () => {
  it("name input throws error for 2 chars", () => {
  //Arange
  //  cy.visit("http://localhost:5173/");
  //Act
    cy.get(`[data-cy="ad-input"]`).type("nd")
  //Assert
  cy.contains(errorMessages.ad);
  });
  it("Surname input throws error for 2 chars", () => {
    //Arange
     // cy.visit("http://localhost:5173/");
    //Act
      cy.get(`[data-cy="soyad-input"]`).type("nd");
    //Assert
    cy.contains(errorMessages.soyad);
    });
    it("Email input throws error for ndk@wit.", () => {
      //Arange
       // cy.visit("http://localhost:5173/");
      //Act
        cy.get(`[data-cy="email-input"]`).type("ndk@wit.");
      //Assert
      cy.contains(errorMessages.email);
      });
      it("Password input throws error for 1233", () => {
        //Arange
         // cy.visit("http://localhost:5173/");
        //Act
        cy.get(`[data-cy="password-input"]`).type("1233");
        //Assert
        cy.contains(errorMessages.password);
        });
        it("Button is disabled for unvalid inputs.", () => {
          //Arange
           // cy.visit("http://localhost:5173/");
          //Act
          cy.get(`[data-cy="password-input"]`).type("1233");
          //Assert
          cy.get(`[data-cy="submit-button"]`).should("be.disabled");
          });
  });
  describe("Form inputs validated", () => {
    it("button enabled for validated", () => {
    //Arange
     // cy.visit("http://localhost:5173/");
    //Act
      cy.get(`[data-cy="ad-input"]`).type("nevzat doğukan");
      cy.get(`[data-cy="soyad-input"]`).type("karabiberoğlu");
      cy.get(`[data-cy="email-input"]`).type("karabiberoglu@itu.edu.tr");
      cy.get(`[data-cy="password-input"]`).type("Ndk193*!23!");
    //Assert
      cy.get(`[data-cy="submit-button"]`).should("not.be.disabled");
    });
    it("submit form on validated inputs.", () => {
      //Arange
       // cy.visit("http://localhost:5173/");
      //Act
        cy.get(`[data-cy="ad-input"]`).type("nevzat doğukan");
        cy.get(`[data-cy="soyad-input"]`).type("karabiberoğlu");
        cy.get(`[data-cy="email-input"]`).type("karabiberoglu@itu.edu.tr");
        cy.get(`[data-cy="password-input"]`).type("Ndk193*!23!");
        cy.get(`[data-cy="submit-button"]`).click();
      //Assert
      cy.get(`[data-cy="response-message"]`).should("be.visible");
      });
    });
});