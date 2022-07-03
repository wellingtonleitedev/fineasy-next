describe("Dashboard", () => {
  it("Integration Test", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h1").contains("Fineasy");
  });
});
