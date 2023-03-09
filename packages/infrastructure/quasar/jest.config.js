module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        "<rootDir>/tests/**/*.spec.ts",
        "<rootDir>/src/**/*.spec.ts",
    ],
    coveragePathIgnorePatterns: [ "<rootDir>/tests/builders/" ],
    moduleNameMapper: {
        "@poc-clean-archi/domain": "<rootDir>/../../domain/lib",
        "@poc-clean-archi/adapters": "<rootDir>/../../lib",
        "@poc-clean-archi/quasar": "<rootDir>/src"
    }
};
