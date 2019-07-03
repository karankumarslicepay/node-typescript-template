import * as supertest from "supertest";
import App from './App';
var should = require('should');
// This agent refers to PORT where program is runninng.
var server = supertest(new App([]).getServer());

// UNIT test begin

describe("SAMPLE unit test example",function(){

  // #1 should return home page

  it("should return status 200",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){ 
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });
});