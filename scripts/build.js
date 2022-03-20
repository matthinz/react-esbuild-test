#!/usr/bin/env node

const esbuild = require("esbuild");
const sassPlugin = require("esbuild-sass-plugin").default;

esbuild
  .build({
    bundle: true,
    outdir: "public/assets",
    entryPoints: ["src/index.tsx"],
    plugins: [sassPlugin()],
  })
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  });
