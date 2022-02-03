module.exports = (api) => ({
    presets: [
        [
            "@babel/preset-env",
            {
                targets: api.caller((caller) => caller && caller.target === "node")
                    ? { node: "current" }
                    : { chrome: "58", ie: "11" },
            },
        ],
        "@babel/preset-typescript",
        "@babel/preset-react",
    ],
    plugins: ["@babel/plugin-transform-runtime"],
});