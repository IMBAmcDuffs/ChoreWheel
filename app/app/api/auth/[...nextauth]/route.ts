import { authOptions } from "@/lib/auth";
import { handlers } from "next-auth";

const handlers = NextAuth(authOptions);

export { handlers };
