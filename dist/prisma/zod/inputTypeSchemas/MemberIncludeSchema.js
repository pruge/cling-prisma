"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberIncludeSchema = void 0;
const zod_1 = require("zod");
const MemberActivityFindManyArgsSchema_1 = require("../outputTypeSchemas/MemberActivityFindManyArgsSchema");
const MemberCountOutputTypeArgsSchema_1 = require("../outputTypeSchemas/MemberCountOutputTypeArgsSchema");
exports.MemberIncludeSchema = zod_1.z.object({
    MemberActivity: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => MemberActivityFindManyArgsSchema_1.MemberActivityFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => MemberCountOutputTypeArgsSchema_1.MemberCountOutputTypeArgsSchema)]).optional(),
}).strict();
exports.default = exports.MemberIncludeSchema;
//# sourceMappingURL=MemberIncludeSchema.js.map