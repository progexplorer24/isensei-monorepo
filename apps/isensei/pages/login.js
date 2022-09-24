import { supabase } from "@/lib/auth/client";
import { VIEWS } from "@/lib/auth/auth";
import { useAuth } from "@/lib/auth/auth";
import { Auth } from "@supabase/ui";

export default function AuthPage() {
  const { user, signOut, view } = useAuth();
  return (
    <div>
      {user ? (
        <>
          Signed in as {user.role} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      ) : (
        <>
          <Auth.UserContextProvider supabaseClient={supabase}>
            <Auth
              supabaseClient={supabase}
              providers={["google", "facebook", "github"]}
            />
          </Auth.UserContextProvider>
        </>
      )}
      {view === VIEWS.UPDATE_PASSWORD ? (
        <Auth.UpdatePassword supabaseClient={supabase} />
      ) : null}
    </div>
  );
}
