import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";

export default [
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unknown-property": [
        "error",
        {
          ignore: [
            // React Three Fiber props
            "args",
            "attach",
            "object",
            "position",
            "rotation",
            "scale",
            "castShadow",
            "receiveShadow",
            "geometry",
            "material",
            "intensity",
            "color",
            "transparent",
            "opacity",
            "wireframe",
            "makeDefault",
          ],
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
