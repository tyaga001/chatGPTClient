"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({  }) {
  class Assistant {
    constructor({ $this_openai, $this_personality }) {
      this.$this_openai = $this_openai;
      this.$this_personality = $this_personality;
    }
    async ask(question) {
      const prompt = String.raw({ raw: ["you are an assistant with the following personality: ", ". ", ""] }, this.$this_personality, question);
      const response = (await this.$this_openai.createCompletion(prompt));
      return (await response.trim());
    }
  }
  return Assistant;
}
//# sourceMappingURL=inflight.Assistant-2.cjs.map