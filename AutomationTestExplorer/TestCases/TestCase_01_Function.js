// GET Method, POST Method, PUT Method
const { getMethod, postMethod, putMethod } = require("../API_servers/API_Objects");

describe("Restful API Automation Testing", function () {
    // GET Method - Test Case 01
    it("GET Method Test Case - 01 - from Function", async function () {
        await getMethod();
    });
    // POST Test - Test Case 01
    let id;
    it("POST Method Test Case - 01 - from Function", async function () {
        id = await postMethod();
    });
    // PUT Test - Test Case 01
    it("PUT Method Test Case - 01 - from Function", async function () {
        await putMethod(id);
    });
});
