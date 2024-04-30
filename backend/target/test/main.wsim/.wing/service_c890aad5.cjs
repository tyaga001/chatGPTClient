      "use strict";
      let $stop;
      exports.start = async function() {
        if ($stop) {
          throw Error('service already started');
        }
        const client = await 
          (await (async () => {
            const $Closure1Client = 
          require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/test/main.wsim/.wing/inflight.$Closure1-4.cjs")({
            $____parent_this_1_props_useBuildCommand_____null_: false,
            $__parent_this_1_buildCommand: "npm run build",
            $__parent_this_1_buildDir: "C:/Users/loyal/Desktop/codingProject/assistant/frontend1/build",
            $__parent_this_1_env: {"API_URL": process.env["WING_TOKEN_WSIM_ROOT_ENV0_API_ATTRS_URL"],"TEXT": "Hello welcome here",},
            $__parent_this_1_path: "C:/Users/loyal/Desktop/codingProject/assistant/frontend1",
            $__parent_this_1_startCommand: "npm run start",
            $fs_Util: require("C:/Users/loyal/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/fs/fs.js").Util,
            $props_localPort: undefined,
            $state: (function() {
  let handle = process.env.STATE_HANDLE_10071f99;
  if (!handle) {
    throw new Error("Missing environment variable: STATE_HANDLE_10071f99");
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
            $util_Util: require("C:/Users/loyal/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/util/util.js").Util,
            $utils_Utils: 
      require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/test/main.wsim/.wing/inflight.Utils-2.cjs")({
      })
    ,
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ;
        const noop = () => {};
        $stop = (await client.handle()) ?? noop;
      };

      exports.stop = async function() {
        if (!$stop) {
          throw Error('service not started');
        }
        await $stop();
        $stop = undefined;
      };
      