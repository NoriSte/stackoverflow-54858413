/// <reference types="Cypress" />

it('if a JSON file and a runtime JSON coincides, the test should pass ', () => {
  let tableValues1 = [
    "Gender",
    "Age group ",
    "Source Total ",
    "21 to 30 ",
    "30 to 35 ",
    "36 to 40 ",
    "41 to 45 ",
    "46 to 50 ",
    "51 to 55 ",
    "56 to 60 ",
    "61 to 65 ",
    "Over 66 ",
    "123",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%"
  ];

  cy.readFile('Latest.json').then(json => JSON.stringify(json)).should('eq',JSON.stringify(tableValues1));
})
