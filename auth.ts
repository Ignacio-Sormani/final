import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToDB } from "./lib/database";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { UserRole } from "./lib/enums";

const login = async ({ email, password }: any) => {
  try {
    connectToDB();

    const user = await User.findOne({ email });
    if (!user?.isActive) throw new Error("Credenciales incorrectas");

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) throw new Error("Credenciales incorrectas");

    return user;
  } catch (err) {
    throw new Error("Error de login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          firstname: token.firstname,
          lastname: token.lastname,
          role: token.role,
        };
      }
      return session;
    },
    authorized({ auth, request }: any) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnSuperadminPanel =
        request.nextUrl?.pathname.startsWith("/superadmin");
      const isOnClientPage = request.nextUrl?.pathname.startsWith("/client");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnRegisterPage =
        request.nextUrl?.pathname.startsWith("/register");

      // // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isOnAdminPanel && user?.role !== UserRole.ADMIN) {
        return false;
      }

      // // ONLY SUPERADMIN CAN REACH THE SUPERADMIN DASHBOARD
      if (isOnSuperadminPanel && user?.role !== UserRole.SUPERADMIN) {
        return false;
      }

      // // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
      if (isOnClientPage && !user && user.isAdmin && user.isSuperadmin) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

      if ((isOnLoginPage || isOnRegisterPage) && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
});
