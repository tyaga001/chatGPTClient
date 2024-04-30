"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $answerSource, $myAssistant }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const query = "programming languages";
      console.log(String.raw({ raw: ["asking a question $", ""] }, query));
      const response = (await $myAssistant.sendPrompt(query));
      console.log(String.raw({ raw: ["publishing joke: $", ""] }, response));
      (await $answerSource.publish(response));
    }
  }
  return $Closure1;
}
//# sourceMappingURL=inflight.$Closure1-7.cjs.map