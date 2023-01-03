describe("Test all Api ", () => {
  it("Test Team Api", () => {
    cy.visit("http://localhost:3000/");
    cy.request("GET", "https://www.balldontlie.io/api/v1/teams").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });

  it("get yearly games", () => {
    cy.visit("http://localhost:3000/");
    cy.request(
      "GET",
      `https://www.balldontlie.io/api/v1/games?seasons[]=2021&team_ids[]=2`
    ).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("get selected team data", () => {
    cy.visit("http://localhost:3000/");
    cy.request("GET", `https://www.balldontlie.io/api/v1/teams/3`).then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});
//Mavericks
