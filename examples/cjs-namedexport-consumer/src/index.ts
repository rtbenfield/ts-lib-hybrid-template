import { foo } from "ts-lib-hybrid";
// "moduleResolution": "Node16" or "moduleResolution": "NodeNext" work with named exports
import { extra } from "ts-lib-hybrid/extra";
const resolve = require.resolve("ts-lib-hybrid");
const resolve_extra = require.resolve("ts-lib-hybrid/extra");
console.log("cjs-namedexport-consumer", { extra, foo, resolve, resolve_extra });
