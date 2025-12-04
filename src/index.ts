import "./core/globals";
import { passed } from "./utils/colours";

describe("Tests", () => {
    test("Shouldn't log test", () => {
        expect("Hi").not.toBe("Test");
    })
})


passed();