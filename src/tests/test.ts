import "../core/globals";

describe("Tests", () => {
    test("Shouldn't log test", () => {
        expect("Hi").not.toBe("Hi");
    })
})

