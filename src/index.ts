import "./core/globals";
import { passed } from "./utils/colors";

describe("Tests", () => {
    test("Shouldn't log test", () => {
        expect("Hi").not.toBe("Test");
    })
})


passed();