type Callback = () => void;
type Test = () => void;
type Matcher<T> = {
    toBe(other: T): void;
    not: {
        toBe(other: T): void;
    }
}

type Status = "Passed" | "Failed";

interface Tests {
    description: string;
    duration: number;
    Status: Status;
    Error?: string;
}

export const RunnedTests = new Set<Tests>();

declare global {
    function describe(description: string, fn: Callback): void;
    function test(description: string, fn: Test): void;
    function it(description: string, fn: Test): void;
    function expect<T>(value: T): Matcher<T>;
}


globalThis.describe = function (description: string, fn: Callback) {
    console.log(description);
    fn();
}

globalThis.test = function (description: string, fn: Test) {
    console.log(description);
    fn();
}

globalThis.it = function (description: string, fn: Test) {
    console.log(description);
    fn();
}

globalThis.expect = function <T>(value: T) {
    return {
        toBe(other: T) {
            if (value !== other) {
                const Test: Tests = {
                    description: "Test",
                    duration: 1,
                    Status: "Failed",
                    Error: `${value} is expected to be ${other}`
                };
                RunnedTests.add(Test);
            } else {
                const Test: Tests = {
                    description: "Test",
                    duration: 1,
                    Status: "Passed",
                };
                RunnedTests.add(Test);
            }
        },

        not: {
            toBe(other: T) {
                if (value === other) {
                const Test: Tests = {
                    description: "Test",
                    duration: 1,
                    Status: "Failed",
                    Error: `${value} should not be ${other}`
                };
                RunnedTests.add(Test);
                }
                else {
                    const Test: Tests = {
                        description: "Test",
                        duration: 1,
                        Status: "Passed",
                    };
                    RunnedTests.add(Test);
                }
            }
        }
    }
}