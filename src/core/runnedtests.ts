import { RunnedTests } from "./globals";
import { passed, failed, grey, reset } from "../utils/colors";
import "../tests/test";

for (const runnedTest of RunnedTests) {
    if (runnedTest.Status === "Passed") {
        passed(`${runnedTest.description} \n ${grey} ${runnedTest.duration} ${reset}`)
    }

    if (runnedTest.Status === "Failed") {
        failed(`${runnedTest.description} \n ${grey} ${runnedTest.duration} ${reset} \n Error: ${runnedTest.Error}`)
    }
}