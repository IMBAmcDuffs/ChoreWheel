import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { GET, POST } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // In production, this would validate against a database
        // For now, simple mock authentication
        if (credentials.email === "admin@example.com" && credentials.password === "password") {
          return { id: "1", name: "Admin", email: "admin@example.com" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/login"
  }
})
