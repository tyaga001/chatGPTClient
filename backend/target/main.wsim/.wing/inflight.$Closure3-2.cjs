"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $db, $std_Json }) {
  class $Closure3 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const questionsAndAnswers = (await $db.list());
      return ({"body": ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(questionsAndAnswers), "status": 200});
    }
  }
  return $Closure3;
}
//# sourceMappingURL=inflight.$Closure3-2.cjs.map