module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./test/setupJest.ts"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
