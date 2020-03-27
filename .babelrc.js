module.exports = {
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "~components": "./src/app/components",
          "~screens": "./src/app/screens",
          "~config": "./src/config",
          "~constants": "./src/constants",
          "~context": "./src/context",
          "~services": "./src/services",
          "~utils": "./src/utils"
        }
      }
    ]
  ]
}
