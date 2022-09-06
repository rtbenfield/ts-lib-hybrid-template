# TypeScript Hybir ESM/CJS Package Example

## TLDR;

A dual `tsc` build is required with separate options. These can be specified on the command line but it's easier to extend the base `tsconfig.json` with overrides. Output each to a separate subdirectory within the output directory.

```json
// tsconfig.cjs.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "CommonJS",
    "moduleResolution": "Node",
    "outDir": "./dist/cjs"
  }
}
```

```json
// tsconfig.esm.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "./dist/esm"
  }
}
```

Add an export map to your `package.json`. Be aware that named exports are only supported in consumers with `"moduleResolution": "Node16"` or `"moduleResolution": "NodeNext"`, but they can still use `"module": "CommonJS"`.

```json
// package.json without named exports
{
  "exports": {
    "import": "./dist/esm/index.js",
    "require": "./dist/cjs/index.js"
  }
}
```

```json
// package.json with named exports
{
  "exports": {
    "./extra": {
      "require": "./dist/cjs/extras/index.js",
      "import": "./dist/esm/extras/index.js"
    },
    ".": {
      "require": "./dist/cjs/index.js",
      "import": "./dist/esm/index.js"
    }
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
