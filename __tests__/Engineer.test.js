var Engineer = require("../lib/Engineer")

describe("Initialization", () => {
    it("should inherit properities of its parent", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var github = "mygithub"
        var john = new Engineer(name, id, email, github)
        
        expect(john.name).toBe(name)
    })
    it("should add the github property", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var github = "mygithub"
        var john = new Engineer(name, id, email, github)

        expect(john.github).toBe(github)
    })
})
describe("Functions", () => {
    it("should have the parents functions", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var github = "mygithub"
        var john = new Engineer(name, id, email, github)

        expect(john.getEmail()).toBe(email)
    })
    it("should add the function getGithub()", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var github = "mygithub"
        var john = new Engineer(name, id, email, github)

        expect(john.getGithub()).toBe(github)
    })
    it("should overwrite the parent function when using getRole()", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var github = "mygithub"
        var john = new Engineer(name, id, email, github)

        expect(john.getRole()).toBe("Engineer")
    })
})