"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({  }) {
  class RespondToQuestions {
    constructor({ $this_gpt, $this_id, $this_store }) {
      this.$this_gpt = $this_gpt;
      this.$this_id = $this_id;
      this.$this_store = $this_store;
    }
    async sendPrompt(question) {
      const reply = (await this.$this_gpt.ask(String.raw({ raw: ["", ""] }, question)));
      const n = (await this.$this_id.inc());
      (await this.$this_store.put(String.raw({ raw: ["message-", ".original.txt"] }, n), reply));
      return reply;
    }
  }
  return RespondToQuestions;
}
//# sourceMappingURL=inflight.RespondToQuestions-2.cjs.map