# TypeScript Hybir ESM/CJS Package Example

## TLDR;

A dual `tsc` build is required with separate options. These can be specified on the command line but it's easier to extend the base `tsconfig.json` with overrides. Output each to a separate subdirectory within the output directory.

```json
// tsconfig.cjs.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "CommonJS",
    "moduleResolution": "classic",
    "outDir": "./dist/cjs"
  }
}
```

```json
// tsconfig.esm.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist/esm"
  }
}
```

Add an export map to your `package.json`.

```json
// package.json
{
  "exports": {
    "import": "./dist/esm/index.js",
    "require": "./dist/cjs/index.js"
  }
}
```

Add a `package.json` file to the `cjs` and `esm` output directories that contains a `type` override. This can be accomplished with a simple script ran in the build pipeline. See `scripts/build.sh` as an example.

```json
// ./dist/esm/package.json
{ "type": "module" }
```

```json
// ./dist/cjs/package.json
{ "type": "commonjs" }
```

**Profit.**
