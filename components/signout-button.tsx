import { logout } from "@/lib/actions";

export function SignOut() {
  return (
    <form action={logout as any}>
      <button type="submit">Sign Out</button>
    </form>
  );
}
