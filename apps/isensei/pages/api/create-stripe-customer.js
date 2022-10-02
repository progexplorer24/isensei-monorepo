import initStripe from "stripe";
import { getServiceSupabase } from "@/lib/auth/client";
const handler = async (req, res) => {
  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    return res.status(401).send("You are not authorized to call this API");
  }
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

  const customer = await stripe.customers.create({
    email: req.body.record.email,
  });
  const supabase = getServiceSupabase();
  const { data, error } = await supabase
    .from("profile")
    .update({ stripe_customer: customer.id })
    .match({ id: req.body.record.id });

  console.log("Customer", {
    customer,
    id: req.body.record.id,
    data,
    error,
    body: req.body,
  });

  res.send({ message: `stripe customer created: ${customer.id}` });
};

export default handler;
