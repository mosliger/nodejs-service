var expect  = require("chai").expect;
var request = require("request");

describe("Customer Container", () => {
  describe("get customer", () => {
    const url = "http://localhost:8080/api/customer";

    it("returns status 200", () => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
      });
    });
  });
});
