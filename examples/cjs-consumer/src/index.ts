import { foo } from "ts-lib-hybrid";
// TypeScript doesn't like importing named exports in "moduleResolution": "Node"
// import { extra } from "ts-lib-hybrid/extra";

const resolve = require.resolve("ts-lib-hybrid");

// require.resolve works because Node is able to resolve named exports
const resolve_extra = require.resolve("ts-lib-hybrid/extra");

console.log("cjs-consumer", { foo, resolve, resolve_extra });
