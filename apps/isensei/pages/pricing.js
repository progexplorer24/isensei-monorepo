import initStripe from "stripe";
const Pricing = ({ plans }) => {
  return (
    <div className="mx-auto flex w-full max-w-3xl justify-around py-16">
      {plans.map((plan) => (
        <div key={plan.id} className="py- h-40 w-80 rounded px-6 shadow">
          <h2 className="text-xl">{plan.name}</h2>
          <p className="text-gray-500">
            {plan.price / 100} / {plan.interval}
          </p>
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
