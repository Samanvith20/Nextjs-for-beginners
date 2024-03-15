import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
 export const provider= {
providers: [
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
]
}
export const handler= NextAuth(provider)
export {handler as GET , handler as POST};