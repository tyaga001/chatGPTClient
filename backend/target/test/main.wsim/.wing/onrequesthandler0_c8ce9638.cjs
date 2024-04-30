"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (new (require("C:/Users/loyal/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/target-sim/api.onrequest.inflight.js")).ApiOnRequestHandlerClient({ handler: 
          (await (async () => {
            const $Closure2Client = 
          require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/test/main.wsim/.wing/inflight.$Closure2-7.cjs")({
            $counter: (function() {
  let handle = process.env.COUNTER_HANDLE_591cd131;
  if (!handle) {
    throw new Error("Missing environment variable: COUNTER_HANDLE_591cd131");
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
            $db: (function() {
  let handle = process.env.TABLE_HANDLE_1c7c637a;
  if (!handle) {
    throw new Error("Missing environment variable: TABLE_HANDLE_1c7c637a");
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
            $myAssistant: 
          (await (async () => {
            const RespondToQuestionsClient = 
          require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/test/main.wsim/.wing/inflight.RespondToQuestions-7.cjs")({
          })
        ;
            const client = new RespondToQuestionsClient({
              $this_gpt: 
          (await (async () => {
            const AssistantClient = 
          require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/test/main.wsim/.wing/inflight.Assistant-7.cjs")({
          })
        ;
            const client = new AssistantClient({
              $this_openai: 
      (await (async () => {
        const OpenAIClient = 
      require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/test/main.wsim/.wing/inflight.OpenAI-1.cjs")({
        $Sim: 
      require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/test/main.wsim/.wing/inflight.Sim-1.cjs")({
        $std_Json: require("C:/Users/loyal/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
      })
    ,
      })
    ;
        const client = new OpenAIClient({
          $this_apiKey: (function() {
  let handle = process.env.SECRET_HANDLE_2302760e;
  if (!handle) {
    throw new Error("Missing environment variable: SECRET_HANDLE_2302760e");
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
          $this_keyOverride: undefined,
          $this_mock: true,
          $this_org: undefined,
          $this_orgOverride: undefined,
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    ,
              $this_personality: "Respondent",
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ,
              $this_id: (function() {
  let handle = process.env.COUNTER_HANDLE_13990310;
  if (!handle) {
    throw new Error("Missing environment variable: COUNTER_HANDLE_13990310");
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
              $this_store: (function() {
  let handle = process.env.BUCKET_HANDLE_681a5e46;
  if (!handle) {
    throw new Error("Missing environment variable: BUCKET_HANDLE_681a5e46");
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
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ,
            $std_Json: require("C:/Users/loyal/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
          })
        ;
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        , args: {} }));
  return await $handler.handle(event);
};