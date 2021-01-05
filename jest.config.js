const {defaults} = require('jest-config');

module.exports = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    globals: {
        'ts-jest': {
            babel: true,
            tsConfig: "tsconfig.json",
        }
    }
    // setupFiles: ['<rootDir>/tests/unit/setup.ts'],
    // globalSetup: '<rootDir>/tests/unit/globalSetup.ts',
    // globalTeardown: '<rootDir>/tests/unit/globalTeardown.ts',
    // moduleNameMapper: {
    //     '^@/(.*)$': '<rootDir>/src/$1',
    // },
    // testMatch: [
    //     '<rootDir>/tests/unit/**/(*.)spec.(js|jsx|ts|tsx)',
    // ],
};
