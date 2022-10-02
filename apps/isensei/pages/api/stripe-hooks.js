import initStripe from "stripe";
import { buffer } from "micro";
import { getServiceSupabase } from "@/lib/auth/client";
export const config = { api: { bodyParser: false } };
const handler = async (req, res) => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);
  const signature = req.headers["stripe-signature"];
  const signingSecret = process.env.STRIPE_SIGNING_SECRET;
  const requestBuffer = await buffer(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      requestBuffer,
      signature,
      signingSecret
    );
  } catch (error) {
    console.log(error);
    return res.status(400).send(`Webhook error: ${error.message}`);
  }
  const supabase = getServiceSupabase();
  switch (event?.type) {
    case "customer.subscription.updated":
      await supabase
        .from("profile")
        .update({
          is_subscribed: true,
          interval: event.data.object.items.data[0].plan.interval,
        })
        .eq("stripe_customer", event.data.object.customer);
  }
  console.log("event received", { event: event });
  res.send({ received: true });
};

export default handler;
