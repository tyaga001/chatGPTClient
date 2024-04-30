"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $counter, $db, $myAssistant, $std_Json }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      const prompt = request.body;
      console.log(String.raw({ raw: ["loggin this to the console ", ""] }, ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(prompt)));
      const response = (await $myAssistant.sendPrompt(String.raw({ raw: ["", ""] }, ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(prompt))));
      const id = String.raw({ raw: ["", ""] }, (await $counter.inc()));
      (await $db.insert(id, ({"question": prompt, "answer": response})));
      return ({"body": response, "status": 200});
    }
  }
  return $Closure2;
}
//# sourceMappingURL=inflight.$Closure2-2.cjs.map