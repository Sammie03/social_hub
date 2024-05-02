module.exports = {
    moduleNameMapper: {
      "\\.(svg)$": "<rootDir>/src/__mocks__/fileMock.js",
    },
  //   "jest": {
  //       "transform": {
  //         "^.+\\.jsx?$": "babel-jest"
  //       }
  //     },   
   "testEnvironment": "jsdom"    
  };