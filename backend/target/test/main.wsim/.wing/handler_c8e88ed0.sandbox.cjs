"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure1Client = 
          require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/test/main.wsim/.wing/inflight.$Closure1-6.cjs")({
            $__parent_this_1_url: process.env["WING_TOKEN_WSIM_ROOT_ENV0_APP_APPSIM_STATE_ATTRS_URL"],
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};
process.setUncaughtExceptionCaptureCallback((reason) => {
  process.send({ type: "reject", reason });
});

process.on("message", async (message) => {
  const { fn, args } = message;
  const value = await exports[fn](...args);
  process.send({ type: "resolve", value });
});
