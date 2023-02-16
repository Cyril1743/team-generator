var Manager = require("../lib/Manager")

describe("Initialization", () => {
    it("should inherit properities of its parent", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var officeNumber = 1
        var john = new Manager(name, id, email, officeNumber)
        
        expect(john.name).toBe(name)
    })
    it("should add the office property", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var officeNumber = 1
        var john = new Manager(name, id, email, officeNumber)

        expect(john.officeNumber).toBe(officeNumber)
    })
})
describe("Functions", () => {
    it("should have the parents functions", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var officeNumber = 1
        var john = new Manager(name, id, email, officeNumber)

        expect(john.getEmail()).toBe(email)
    })
    it("should overwrite the parent function when using getRole()", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var officeNumber = 1
        var john = new Manager(name, id, email, officeNumber)

        expect(john.getRole()).toBe("Manager")
    })
})