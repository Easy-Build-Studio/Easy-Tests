import fs from "fs";
import path from "path";
import { RunnedTests } from "./globals";
import { passed, failed, grey, reset } from "../utils/colors";

function getSpecFiles(dir: string): string[] {
    const result = new Array<string>();

    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);

        if (fs.statSync(full).isDirectory()) {
            result.push(...getSpecFiles(full));
        }

        if (file.endsWith(".spec.ts")) {
            result.push(full);
        }
    }

    return result;
}

export async function runTests(folder: string) {
    const files = getSpecFiles(folder);

    for (const file of files) {
        require(path.resolve(file));
    }

    const time = console.timeLog;
    console.log(time)
    
    for (const runnedTest of RunnedTests) {
        if (runnedTest.Status === "Passed") {
            passed(`${runnedTest.description} \n`)
        }

        if (runnedTest.Status === "Failed") {
            failed(`${runnedTest.description} \n ${grey} \n Error: ${runnedTest.Error}`)
        }
    }
}


runTests("src/tests")