//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

// Messed up some values if you want the test to return false

chai.use(chaiHttp);

// Test edit /order route, and test validations if it works properly
describe("/post   /order", () => {
  it("Should get created order", done => {
    chai
      .request(server)
      .put("/order")

      //////////////////////
      .send({
        customer: {
          _id: "5d1b6d43e0d2b078e254db2a"
        },
        status: "On-Cart",
        items: [
          {
            name: "Baby Yoda",
            description: "Baby Yoda Funko Pop!",
            price: 119.90,
            imgUrl: "https://cdn.shopify.com/s/files/1/1052/2158/products/49757_Mandolarian_TheChild_10in_POP_Renders_GLAM-WEB_1000x2000.png?v=1592285335",
            qty: 100
          },
        ],
        urlId: "zMCiaRIjf"
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property("customer");
        res.body.should.have.property("status");
        res.body.should.have.property("items");
        res.body.should.have.property("urlId");
        done();
      });
  });
});
