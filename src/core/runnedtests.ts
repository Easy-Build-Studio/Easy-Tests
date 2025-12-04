import { RunnedTests } from "./globals";
import { passed } from "../utils/colors";
import "../index";


for (const runnedTest of RunnedTests) {
    if (runnedTest.Status === "Passed") {
        passed(`${runnedTest.description} \n ${runnedTest.duration}ms`)
    }

    if (runnedTest.Status === "Failed") {
        passed(`${runnedTest.description} \n ${runnedTest.duration}`)
    }
}