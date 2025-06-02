const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app"); // Asegúrate que tu app exporta express()

chai.use(chaiHttp);
const { expect } = chai;

describe("GET /files/data", () => {
  it("should return a JSON array", (done) => {
    chai
      .request(app)
      .get("/files/data")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("each item should have file and lines fields", (done) => {
    chai
      .request(app)
      .get("/files/data")
      .end((err, res) => {
        const fileData = res.body[0];
        expect(fileData).to.have.property("file");
        expect(fileData).to.have.property("lines").that.is.an("array");
        done();
      });
  });

  it("lines should only include valid formatted objects", (done) => {
    chai
      .request(app)
      .get("/files/data")
      .end((err, res) => {
        const lines = res.body[0]?.lines;
        if (lines && lines.length > 0) {
          const line = lines[0];
          expect(line).to.have.all.keys("text", "number", "hex");
        }
        done();
      });
  });

  it("should handle optional query param: ?fileName=", (done) => {
    chai
      .request(app)
      .get("/files/data?fileName=test2.csv")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        expect(res.body[0]).to.have.property("file", "test2.csv");
        done();
      });
  });
});
