module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [ "<rootDir>/tests/**/*.spec.ts" ],
    coveragePathIgnorePatterns: [ "<rootDir>/tests/builders/" ],
    moduleNameMapper: {
        "@poc-clean-archi/domain": "<rootDir>/lib"
    }
};