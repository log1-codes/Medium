import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const z = __require("zod");
export const signupInput = z.object({
    username: z.string().email,
    password: z.string().min(6),
    name: z.string().optional()
});
export const signinInput = z.object({
    username: z.string().email,
    password: z.string().min(6),
});
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
});
export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
});
//# sourceMappingURL=index.js.map