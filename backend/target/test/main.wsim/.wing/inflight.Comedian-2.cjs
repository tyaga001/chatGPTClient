"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({  }) {
  class Comedian {
    constructor({ $this_gpt, $this_id, $this_store }) {
      this.$this_gpt = $this_gpt;
      this.$this_id = $this_id;
      this.$this_store = $this_store;
    }
    async getJoke(topic) {
      const reply = (await this.$this_gpt.ask(String.raw({ raw: ["Tell me a joke about ", ""] }, topic)));
      const n = (await this.$this_id.inc());
      (await this.$this_store.put(String.raw({ raw: ["message-", ".original.txt"] }, n), reply));
      return reply;
    }
  }
  return Comedian;
}
//# sourceMappingURL=inflight.Comedian-2.cjs.map