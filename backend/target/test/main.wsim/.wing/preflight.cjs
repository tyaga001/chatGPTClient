"use strict";
const $stdlib = require('@winglang/sdk');
const $platforms = ((s) => !s ? [] : s.split(';'))(process.env.WING_PLATFORMS);
const $outdir = process.env.WING_SYNTH_DIR ?? ".";
const $wing_is_test = process.env.WING_IS_TEST === "true";
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const $extern = $helpers.createExternRequire(__dirname);
const cloud = $stdlib.cloud;
const openai = require("./preflight.openai-2.cjs");
const http = $stdlib.http;
const ex = $stdlib.ex;
const react = require("./preflight.react-8.cjs");
class $Root extends $stdlib.std.Resource {
  constructor($scope, $id) {
    super($scope, $id);
    class Assistant extends $stdlib.std.Resource {
      constructor($scope, $id, personality) {
        super($scope, $id);
        this.openai = new openai.OpenAI(this, "OpenAI", { apiKeySecret: apiKeySecret });
        this.personality = personality;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.Assistant-7.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const AssistantClient = ${Assistant._toInflightType()};
            const client = new AssistantClient({
              $this_openai: ${$stdlib.core.liftObject(this.openai)},
              $this_personality: ${$stdlib.core.liftObject(this.personality)},
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "ask": [
            [this.openai, ["createCompletion"]],
            [this.personality, []],
          ],
          "$inflight_init": [
            [this.openai, []],
            [this.personality, []],
          ],
        });
      }
    }
    class RespondToQuestions extends $stdlib.std.Resource {
      constructor($scope, $id, store) {
        super($scope, $id);
        this.gpt = new Assistant(this, "Assistant", "Respondent");
        this.id = this.node.root.new("@winglang/sdk.cloud.Counter", cloud.Counter, this, "NextID");
        this.store = store;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.RespondToQuestions-7.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const RespondToQuestionsClient = ${RespondToQuestions._toInflightType()};
            const client = new RespondToQuestionsClient({
              $this_gpt: ${$stdlib.core.liftObject(this.gpt)},
              $this_id: ${$stdlib.core.liftObject(this.id)},
              $this_store: ${$stdlib.core.liftObject(this.store)},
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "sendPrompt": [
            [this.gpt, ["ask"]],
            [this.id, ["inc"]],
            [this.store, ["put"]],
          ],
          "$inflight_init": [
            [this.gpt, []],
            [this.id, []],
            [this.store, []],
          ],
        });
      }
    }
    class $Closure1 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure1-7.cjs")({
            $answerSource: ${$stdlib.core.liftObject(answerSource)},
            $myAssistant: ${$stdlib.core.liftObject(myAssistant)},
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure1Client = ${$Closure1._toInflightType()};
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "handle": [
            [answerSource, ["publish"]],
            [myAssistant, ["sendPrompt"]],
          ],
          "$inflight_init": [
            [answerSource, []],
            [myAssistant, []],
          ],
        });
      }
    }
    class $Closure2 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure2-7.cjs")({
            $counter: ${$stdlib.core.liftObject(counter)},
            $db: ${$stdlib.core.liftObject(db)},
            $myAssistant: ${$stdlib.core.liftObject(myAssistant)},
            $std_Json: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"))},
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure2Client = ${$Closure2._toInflightType()};
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "handle": [
            [counter, ["inc"]],
            [db, ["insert"]],
            [myAssistant, ["sendPrompt"]],
          ],
          "$inflight_init": [
            [counter, []],
            [db, []],
            [myAssistant, []],
          ],
        });
      }
    }
    class $Closure3 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure3-7.cjs")({
            $db: ${$stdlib.core.liftObject(db)},
            $std_Json: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"))},
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure3Client = ${$Closure3._toInflightType()};
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "handle": [
            [db, ["list"]],
          ],
          "$inflight_init": [
            [db, []],
          ],
        });
      }
    }
    const apiKeySecret = this.node.root.new("@winglang/sdk.cloud.Secret", cloud.Secret, this, "OpenAI Secret", { name: "OAIAPIKey" });
    const api = this.node.root.new("@winglang/sdk.cloud.Api", cloud.Api, this, "Api", ({"cors": true}));
    const counter = this.node.root.new("@winglang/sdk.cloud.Counter", cloud.Counter, this, "Counter");
    const db = this.node.root.new("@winglang/sdk.ex.Table", ex.Table, this, "Table", { name: "assistant", primaryKey: "id", columns: ({["question"]: ex.ColumnType.STRING, ["answer"]: ex.ColumnType.STRING}) });
    const store = this.node.root.new("@winglang/sdk.cloud.Bucket", cloud.Bucket, this, "Joke Store");
    const answerSource = this.node.root.new("@winglang/sdk.cloud.Topic", cloud.Topic, this, "New answer");
    const myAssistant = new RespondToQuestions(this, "Helpful Assistant", store);
    this.node.root.new("@winglang/sdk.cloud.Function", cloud.Function, this, "START HERE", new $Closure1(this, "$Closure1"));
    (api.post("/assistant", new $Closure2(this, "$Closure2")));
    (api.get("/assistant", new $Closure3(this, "$Closure3")));
    const website = new react.App(this, "App", { projectPath: "../frontend1" });
    (website.addEnvironment("API_URL", api.url));
    (website.addEnvironment("TEXT", "Hello welcome here"));
  }
}
const $PlatformManager = new $stdlib.platform.PlatformManager({platformPaths: $platforms});
const $APP = $PlatformManager.createApp({ outdir: $outdir, name: "main", rootConstruct: $Root, isTestEnvironment: $wing_is_test, entrypointDir: process.env['WING_SOURCE_DIR'], rootId: process.env['WING_ROOT_ID'] });
$APP.synth();
//# sourceMappingURL=preflight.cjs.map