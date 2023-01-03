describe("All test of Search Bar", () => {
  it("search Names", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[cy-data='Hawks']");
    cy.get("input").type("hawk");
    cy.get("[cy-data='Hawks']").contains("Hawks");
    cy.get("input").clear();
    cy.get("input").type("Mavericks");
    cy.get("[cy-data='Mavericks']").contains("Mavericks");
  });

  it("search city", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[cy-data='Chicago']");
    cy.get("input").type("Chicago");
    cy.get("[cy-data='Chicago']").contains("Chicago");
    cy.get("input").clear();
    cy.get("input").type("la");
    cy.get("[cy-data='LA']").contains("LA");
  });
});
