var Intern = require("../lib/Intern")

describe("Initialization", () => {
    it("should inherit the properties of its parent", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var school = "U2"
        var john = new Intern(name, id, email, school)

        expect(john.name).toBe(name)
    })
    it("should add the school property", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var school = "U2"
        var john = new Intern(name, id, email, school)

        expect(john.school).toBe(school)
    })
})
describe("Functions", () => {
    it("should have the parents functions", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var school = "U2"
        var john = new Intern(name, id, email, school)

        expect(john.getEmail()).toBe(email)
    })
    it("should add the function getSchool()", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var school = "U2"
        var john = new Intern(name, id, email, school)

        expect(john.getSchool()).toBe(school)
    })
    it("should overwrite the parent function when using getRole()", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var school = "U2"
        var john = new Intern(name, id, email, school)

        expect(john.getRole()).toBe("Intern")
    })
})