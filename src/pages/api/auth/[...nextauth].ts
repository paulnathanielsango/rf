import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        return {
          id: "17",
          image:
            "https://lh3.googleusercontent.com/a/AGNmyxZH6ZNTzDTzco55RW5HO-68wyxgpVRh9LbupYE7=s96-c",
          emailVerified: null,
          name: "PN CS",
          email: "zly@vs.com",
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      const isAllowedToSignIn = true;

      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      token.role = "internal";
      token.iat = Math.floor(Date.now() / 1000);
      token.exp = Math.floor(Date.now() / 1000) + 60 * 60;
      return token;
    },
    async session({ session, token, user }) {
      if (user) {
        session.user = user;
      }
      return session;
    },
  },
};
export default NextAuth(authOptions);
