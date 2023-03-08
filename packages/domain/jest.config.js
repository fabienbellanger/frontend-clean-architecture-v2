module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [ "<rootDir>/tests/**/*.spec.ts"],
    moduleNameMapper: {
        "@poc-clean-archi/domain": "<rootDir>/lib"
    }
};