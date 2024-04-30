"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (new (require("C:/Users/loyal/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/target-sim/api.onrequest.inflight.js")).ApiOnRequestHandlerClient({ handler: 
          (await (async () => {
            const $Closure3Client = 
          require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/main.wsim/.wing/inflight.$Closure3-7.cjs")({
            $db: (function() {
  let handle = process.env.TABLE_HANDLE_3ff47b20;
  if (!handle) {
    throw new Error("Missing environment variable: TABLE_HANDLE_3ff47b20");
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
            $std_Json: require("C:/Users/loyal/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
          })
        ;
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        , args: {} }));
  return await $handler.handle(event);
};