// https://docs.expo.dev/guides/using-eslint/
import { defineConfig } from "eslint/config";
import expoConfig from "eslint-config-expo/flat";
import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use Expo.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const expoConfig = [
  ...baseConfig,
  expoConfig,
  {
    ignores: ["dist/*"],
  },
];
