describe("Test all Api ", () => {
  it("Test Team Api", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[cy-data='Hawks']");
    cy.get("[cy-data='Bulls']").click();
    cy.get("[cy-data='team-full-name']", { timeout: 10000 });
    cy.get("[cy-data='team-full-name']").contains("Bulls");
    cy.get("[cy-data='modal-title']").contains("Bulls");
  });
});
