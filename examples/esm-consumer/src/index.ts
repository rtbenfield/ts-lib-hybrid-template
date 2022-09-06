import { foo } from "ts-lib-hybrid";
import { extra } from "ts-lib-hybrid/extra";
const resolve = await import.meta.resolve?.("ts-lib-hybrid");
const resolve_extra = await import.meta.resolve?.("ts-lib-hybrid/extra");
console.log("esm-consumer", { extra, foo, resolve, resolve_extra });
