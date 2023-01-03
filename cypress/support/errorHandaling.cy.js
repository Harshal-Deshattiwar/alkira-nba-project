Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("is not a function")) {
    return false;
  }
});
