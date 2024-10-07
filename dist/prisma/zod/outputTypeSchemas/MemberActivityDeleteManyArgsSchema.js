"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityDeleteManyArgsSchema = void 0;
const zod_1 = require("zod");
const MemberActivityWhereInputSchema_1 = require("../inputTypeSchemas/MemberActivityWhereInputSchema");
exports.MemberActivityDeleteManyArgsSchema = zod_1.z.object({
    where: MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema.optional(),
}).strict();
exports.default = exports.MemberActivityDeleteManyArgsSchema;
//# sourceMappingURL=MemberActivityDeleteManyArgsSchema.js.map