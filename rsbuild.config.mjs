import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
const path = require("path")

export default defineConfig({
  plugins: [pluginReact()],

});
