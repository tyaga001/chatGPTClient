"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure1Client = 
          require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/main.wsim/.wing/inflight.$Closure1-7.cjs")({
            $answerSource: (function() {
  let handle = process.env.TOPIC_HANDLE_8d96f823;
  if (!handle) {
    throw new Error("Missing environment variable: TOPIC_HANDLE_8d96f823");
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
          require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/main.wsim/.wing/inflight.RespondToQuestions-7.cjs")({
          })
        ;
            const client = new RespondToQuestionsClient({
              $this_gpt: 
          (await (async () => {
            const AssistantClient = 
          require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/main.wsim/.wing/inflight.Assistant-7.cjs")({
          })
        ;
            const client = new AssistantClient({
              $this_openai: 
      (await (async () => {
        const OpenAIClient = 
      require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/main.wsim/.wing/inflight.OpenAI-1.cjs")({
        $Sim: 
      require("C:/Users/loyal/Desktop/codingProject/assistant/backend/target/main.wsim/.wing/inflight.Sim-1.cjs")({
        $std_Json: require("C:/Users/loyal/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
      })
    ,
      })
    ;
        const client = new OpenAIClient({
          $this_apiKey: (function() {
  let handle = process.env.SECRET_HANDLE_94f79573;
  if (!handle) {
    throw new Error("Missing environment variable: SECRET_HANDLE_94f79573");
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
          $this_mock: false,
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
  let handle = process.env.COUNTER_HANDLE_f048efbd;
  if (!handle) {
    throw new Error("Missing environment variable: COUNTER_HANDLE_f048efbd");
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
  let handle = process.env.BUCKET_HANDLE_7562a09e;
  if (!handle) {
    throw new Error("Missing environment variable: BUCKET_HANDLE_7562a09e");
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
