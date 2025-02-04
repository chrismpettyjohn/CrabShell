import { build } from "bun";

await build({
  entrypoints: ["src/index.ts"],
  outdir: "dist",
  minify: true,
  target: "browser",
  sourcemap: "inline",
  format: "esm",
});

console.log("@crabshell/public-client built successfully");
