"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DummySchema {
    get() {
        return DummySchema.dummyDb;
    }
}
DummySchema.dummyDb = [];
const dummySchema = new DummySchema();
exports.default = dummySchema;
//# sourceMappingURL=dummy.schema.js.map