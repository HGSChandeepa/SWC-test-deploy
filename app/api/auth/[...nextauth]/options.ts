import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@models/agent";
import { connectDB } from "@util/database";

declare module "next-auth" {
  interface Profile {
    role: string;
  }
}

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      async profile(profile) {
        try {
          await connectDB();
          const user = await User.findOne({
            email: profile.email,
            auth: "Provider",
          });
          if (user) {
            return {
              ...profile,
              id: profile.sub,
              image: profile.picture,
              role: user.role,
            };
          } else {
            await User.create({
              email: profile?.email,
              first_name: profile?.name?.split(" ")[0],
              last_name: profile?.name?.split(" ")[1],
              password: "-",
              image: profile?.picture,
              role: "",
              policy: "",
              auth: "Provider",
            });
            return {
              ...profile,
              id: profile.sub,
              email: profile.email,
              image: profile.picture,
              role: "",
            };
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "myemail@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          await connectDB();
          const user = await User.findOne({
            email: credentials?.email,
            auth: "Credential",
          });
          if (!user) {
            return null;
          }

          if (credentials?.password === user.password) {
            return user;
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/denied", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        try {
          await connectDB();

          const user = await User.findOne({
            email: profile?.email,
            auth: "Provider",
          });

          if (!user) {
            await User.create({
              email: profile?.email,
              first_name: profile?.name?.split(" ")[0],
              last_name: profile?.name?.split(" ")[1],
              password: "-",
              image: profile?.image,
              role: "",
              policy: "",
              auth: "Provider",
            });
          }
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },
    async jwt({ token, user, profile, account }) {
      if (account?.provider === "google") {
        console.log(account);
        if (profile?.role && token) {
          token.role = profile.role;
        } else {
          token.role = "";
        }
      }
      if (account?.provider === "credentials") {
        if (user?.role && token) {
          token.role = user.role;
        } else {
          token.role = "";
        }
      }
      return token;
    },
  },
};
