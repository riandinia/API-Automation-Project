const request = require("supertest"); //import SuperTest 
const BaseURL = require("../GlobalVariable/BaseURL"); //import Global Variable
const { expect } = require("chai"); //import Chai

const URL = `${BaseURL}`; //Define Global Variable

// GET Method
async function getMethod() {
    const response = await request(URL).get("/objects");
    // Assertions / Verification
    expect(response.status).to.equal(200);
    console.log(response.body);
}

// POST Method
async function postMethod() {
    const response = await request(URL).post("/objects").send({
        "name": "Apple MacBook Pro 13-inch",
        "data": {
            "year": "2022",
            "price": "1570.99",
            "CPU model": "Apple M2",
            "Hard disk size": "256 GB"
        }
    })
    // Verification / Assertions Response Body after POST
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Apple MacBook Pro 13-inch");
    expect(response.body.data.year).to.equal("2022");
    expect(response.body.data.price).to.equal("1570.99");
    expect(response.body.data).to.deep.include({
        "CPU model": "Apple M2",
        "Hard disk size": "256 GB",
    });
    expect(response.body.createdAt).to.not.be.null;
    console.log(response.body);
    // Save ID after POST method
    const id = response.body.id;
    console.log("id after POST:", id);
    return id; //Return the ID
}

// PUT Method
async function putMethod(id) {
    const response = await request(URL).put(`/objects/${id}`).send({
        "name": "Apple MacBook Pro 13-inch (with Touch Bar) [PUT]",
        "data": {
            "year": "2022",
            "price": "1570.99",
            "CPU model": "Apple M2",
            "Hard disk size": "256 GB",
            "color": "Silver"
        }
    })
    // Verification / Assertions Response Body after PUT
    expect(response.status).to.equal(200);
    expect(response.body.data.color).to.equal("Silver");
    expect(response.body.name).to.equal("Apple MacBook Pro 13-inch (with Touch Bar) [PUT]");
    expect(response.body.updatedAt).to.not.be.null;
    console.log(response.body);
}


module.exports = { getMethod, postMethod, putMethod };
