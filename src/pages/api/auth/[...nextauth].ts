import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      credentials: { password: { label: "Password", type: "password" } },
      async authorize(credentials: any) {
        console.log("credentials", credentials);

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
      console.log("callbacks signIn user: ", user);

      if (isAllowedToSignIn) {
        console.log("signIn success");
        return true;
      } else {
        console.log("signIn fail");
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log("new user? ", isNewUser);
      token.role = "internal";
      token.iat = Math.floor(Date.now() / 1000);
      token.exp = Math.floor(Date.now() / 1000) + 60 * 60;
      console.log("token ", token, "user", user, "account", account);
      return token;
    },
    async session({ session, token, user }) {
      console.log("session next-auth", session, "token", token, "user", user);
      if (user) {
        session.user = user;
      }
      return session;
    },
  },
};
export default NextAuth(authOptions);
