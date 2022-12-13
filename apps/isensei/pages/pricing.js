import { useAuth } from "@/lib/auth/auth";
import initStripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Link from "next/link";
const Pricing = ({ plans }) => {
  const { user, isLoading } = useAuth();

  const processSubscription = (planId) => async () => {
    const { data } = await axios.get(`/api/subscription/${planId}`);
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
    console.log("Data", { data: data.id });
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  const showSubscribeButton = !!user && !user.is_subscribed;
  const showCreateAccountButton = !user;
  const showManageSubscriptionButton = !!user && user.is_subscribed;

  return (
    <div className="mx-auto flex w-full max-w-3xl justify-around py-16">
      {plans.map((plan) => (
        <div key={plan.id} className="py- h-40 w-80 rounded px-6 shadow">
          <h2 className="text-xl">{plan.name}</h2>
          <p className="text-gray-500">
            {plan.price / 100} / {plan.interval}
          </p>
          {!isLoading && (
            <div>
              {showSubscribeButton && (
                <button onClick={processSubscription(plan.id)}>
                  Subscribe
                </button>
              )}
              {showCreateAccountButton && <button>Create Account</button>}
              {showManageSubscriptionButton && (
                <Link href="/dashboard">Manage Subscription</Link>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

  const { data: prices } = await stripe.prices.list();

  const plans = await Promise.all(
    prices.map(async (price) => {
      const product = await stripe.products.retrieve(price.product);
      return {
        id: price.id,
        name: product.name,
        price: price.unit_amount,
        interval: price.recurring.interval,
        currencty: price.currency,
      };
    })
  );

  const sortedPlans = plans.sort((a, b) => a.price - b.price);

  return {
    props: {
      plans: sortedPlans,
    },
  };
};

export default Pricing;
