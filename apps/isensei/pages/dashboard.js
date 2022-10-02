import { supabase } from "@/lib/auth/client";
import { useAuth } from "@/lib/auth/auth";
import axios from "axios";
import { useRouter } from "next/router";
const Dashboard = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const loadPortal = async () => {
    const { data } = await axios.get("/api/portal");
    router.push(data.url);
  };

  return (
    <>
      <h1>Dashboard</h1>
      {!isLoading && (
        <>
          <p>
            {user?.is_subscribed
              ? `Subscribed: ${user.interval}`
              : "Not subscribed"}
          </p>
          <button onClick={loadPortal}>Manage Subscription</button>
        </>
      )}
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};

export default Dashboard;
