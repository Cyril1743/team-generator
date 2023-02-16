var Employee = require("../lib/Employee")

describe("Initialization", () => {
    it("should generate an object", () =>{
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var john = new Employee(name, id, email)

        expect(typeof(john)).toBe("object")
        expect(john.email).toBe(email)
    })
} )
describe("Functions", ()=>{
    it("should return name when getName() is called", () =>{
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var john = new Employee(name, id, email)

        expect(john.getName()).toBe(name)
    })
    it("should return id when getId() is called", () => {
        var name = "John"
        var id = 16
        var email = "newmail.email.com"
        var john = new Employee(name, id, email)

        expect(john.getId()).toBe(id)
    })
})