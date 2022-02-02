module.exports = {
    env: {
        browser: true,
        es2021: true,
        "jest/globals": true,
    },
    plugins: ["jest", "@typescript-eslint", "react"],
    extends: [
        "airbnb-base",
        "plugin:jest/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    overrides: [{
        "files": ["src/*.tsx"],
        parser: "@typescript-eslint/parser",
        parserOptions: {
            "project": "./tsconfig.json"
        },
        plugins: ["@typescript-eslint/eslint-plugin"],
        rules: {
            "import/extensions": [
                "error",
                "ignorePackages",
                {
                    "tsx": "never",
                    "js": "never",
                }
            ],
            "max-len": [
                "error",
                {
                    ignoreComments: true,
                    code: 120,
                },
            ],
            "no-param-reassign": "off",
            "import/prefer-default-export": "off",
        },
    }],
    settings: {
        "import/resolver": {
            "node": {
                "extensions": [".tsx", ".js"],
            }
        }
    },
};
