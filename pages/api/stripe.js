import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)
import { getSession } from "@auth0/nextjs-auth0";

export default async function handler(req,res){
     const session = getSession(req, res);
  const user = session?.user;
   if(user){
       const stripeId = user["http://localhost:3000/stripe_customer_id"];

    if(req.method === 'POST'){
        try{
            const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    customer:stripeId,
    allow_promotion_codes:true,
    shipping_options:[{shipping_rate:'shr_1LR0NyGghqZuJKYfmBG6W1cj'},{shipping_rate:'shr_1LR0mrGghqZuJKYfPF2kPBEf'}],
    line_items: req.body.map((item) =>
     { return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images:[item.Image.data.attributes.formats.thumbnail.url],
          },
          unit_amount: item.Price * 100,
        },
        adjustable_quantity: {
            enabled: true,
            minimum: 1,
        },
        quantity: item.quantity,
      }}),
      mode: 'payment',
      //sucess url and cancel url 
      success_url:`${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:`${req.headers.origin}/canceled`
    })
      res.status(200).json(session)
     } catch (error){
        res.status(error.statusCode || 500).json(error.message)
        }
    }
} else{
     if(req.method === 'POST'){
        try{
            const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    allow_promotion_codes:true,
    shipping_options:[{shipping_rate:'shr_1LR0NyGghqZuJKYfmBG6W1cj'},{shipping_rate:'shr_1LR0mrGghqZuJKYfPF2kPBEf'}],
    line_items: req.body.map((item) =>
     { return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images:[item.Image.data.attributes.formats.thumbnail.url],
          },
          unit_amount: item.Price * 100,
        },
        adjustable_quantity: {
            enabled: true,
            minimum: 1,
        },
        quantity: item.quantity,
      }}),
      mode: 'payment',
      //sucess url and cancel url 
      success_url:`${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:`${req.headers.origin}/canceled`
    })
      res.status(200).json(session)
     } catch (error){
        res.status(error.statusCode || 500).json(error.message)
        }
    }

}
}