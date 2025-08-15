import z = require("zod");
export declare const signupInput: z.ZodObject<{
    username: (params?: string | z.z.core.$ZodCheckEmailParams) => z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export type SignupInput = z.infer<typeof signupInput>;
export declare const signinInput: z.ZodObject<{
    username: (params?: string | z.z.core.$ZodCheckEmailParams) => z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
export type SigninInput = z.infer<typeof signinInput>;
export declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, z.z.core.$strip>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export declare const updateBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodNumber;
}, z.z.core.$strip>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
//# sourceMappingURL=index.d.ts.map