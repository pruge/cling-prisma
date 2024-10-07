"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberCountOutputTypeArgsSchema = void 0;
const zod_1 = require("zod");
const MemberCountOutputTypeSelectSchema_1 = require("./MemberCountOutputTypeSelectSchema");
exports.MemberCountOutputTypeArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => MemberCountOutputTypeSelectSchema_1.MemberCountOutputTypeSelectSchema).nullish(),
}).strict();
exports.default = MemberCountOutputTypeSelectSchema_1.MemberCountOutputTypeSelectSchema;
//# sourceMappingURL=MemberCountOutputTypeArgsSchema.js.map