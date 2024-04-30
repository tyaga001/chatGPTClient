"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (new (require("C:/Users/loyal/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/target-sim/queue.setconsumer.inflight.js")).QueueSetConsumerHandlerClient({ handler: 
          (await (async () => {
            const $Closure1Client = 
          require("C:/Users/loyal/Desktop/codingProject/test-wing/target/main.wsim/.wing/inflight.$Closure1-1.cjs")({
            $bucket: (function() {
  let handle = process.env.BUCKET_HANDLE_112179e9;
  if (!handle) {
    throw new Error("Missing environment variable: BUCKET_HANDLE_112179e9");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  const caller = process.env.WING_SIMULATOR_CALLER;
  if (!caller) {
    throw new Error("Missing environment variable: WING_SIMULATOR_CALLER");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle, caller);
})(),
            $counter: (function() {
  let handle = process.env.COUNTER_HANDLE_660dbe08;
  if (!handle) {
    throw new Error("Missing environment variable: COUNTER_HANDLE_660dbe08");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  const caller = process.env.WING_SIMULATOR_CALLER;
  if (!caller) {
    throw new Error("Missing environment variable: WING_SIMULATOR_CALLER");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle, caller);
})(),
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        , args: {} }));
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
