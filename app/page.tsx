import ScrollToOrderButton from "./components/ScrollToOrderButton";
import CookieCard from "./components/CookieCard";

const cookies = [
  {
    id: 1,
    name: "Milk Chocolate Chip",
    description:
      "The classic—you can't go wrong. Thick, soft, and packed with milk chocolate chips.",
    image: "/milk.avif",
    paymentLink:
      "https://buy.stripe.com/fZeeYR8QJ6kRbfO6oo?success_url=http%3A%2F%2Flocalhost%3A3000%2Fsuccess",
  },
  {
    id: 2,
    name: "Cookies & Cream Brownie",
    description:
      "A dark chocolate brownie packed with cookies & cream pieces and semi-sweet chunks, crowned with white drop buttercream, sprinkled with cookies & cream pieces, and drizzled with chocolate ganache—available all month long!",
    image: "/ccbrownie.avif",
    featured: true,
    paymentLink:
      "https://buy.stripe.com/00geYR9UN4cJes0aEK?success_url=http%3A%2F%2Flocalhost%3A3000%2Fsuccess",
  },
  {
    id: 3,
    name: "Biscoff® Cake",
    description:
      "Two layers of fluffy cake flavored with warm spices, complete with swirls of cookie butter frosting, melty cookie butter, and a crunch of buttery cookie butter cookie crumbs.",
    image: "/biscoff.avif",
    featured: true,
    paymentLink:
      "https://buy.stripe.com/dR64kdc2VfVr97G9AE?success_url=http%3A%2F%2Flocalhost%3A3000%2Fsuccess",
  },
  {
    id: 4,
    name: "Pineapple Whip",
    description:
      "A pineapple sugar cookie with a perfect swirl of a fresh, whipped pineapple-flavored topping.",
    image: "/pineapple.avif",
    paymentLink:
      "https://buy.stripe.com/6oEbMFc2VeRngA85kp?success_url=http%3A%2F%2Flocalhost%3A3000%2Fsuccess",
  },
  {
    id: 5,
    name: "Chocolate Sea Salt Toffee",
    description:
      "A gooey and delicious combination of chocolate, toffee, and milk chocolate chips, all topped with a dash of flakey sea salt.",
    image: "/csstoffee.avif",
    paymentLink:
      "https://buy.stripe.com/3cs7wp3wp6kRabKcMP?success_url=http%3A%2F%2Flocalhost%3A3000%2Fsuccess",
  },
  {
    id: 6,
    name: "Strawberry Crumb Cake",
    description:
      "A buttery strawberry cookie baked with white drops, topped with a milky glaze and a crunch of strawberry vanilla streusel.",
    image: "/strawb.avif",
    paymentLink:
      "https://buy.stripe.com/4gw2c54AtgZv1Fe9AC?success_url=http%3A%2F%2Flocalhost%3A3000%2Fsuccess",
  },
  {
    id: 7,
    name: "Ultimate Peanut Butter",
    description:
      "A peanut butter cookie stuffed with peanut butter and topped with a drizzle of melted peanut butter.",
    image: "/pb.avif",
    paymentLink:
      "https://buy.stripe.com/4gw1812sl5gNbfOcMN?success_url=http%3A%2F%2Flocalhost%3A3000%2Fsuccess",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-100">
      <main>
        <section className="bg-pink-200 py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full mb-6 font-bold">
              UVA STUDENTS ONLY
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-pink-800 mb-4">
              Week of Mar 24 - 29
            </h1>
            <p className="text-xl text-pink-700 mb-8">
              National flavors delivered to your dorm or apartment
            </p>
            <ScrollToOrderButton />
          </div>
        </section>

        <section id="cookies-section" className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-800 mb-12">
              This Week&rsquo;s Cookies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cookies.map((cookie) => (
                <CookieCard key={cookie.id} cookie={cookie} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pink-200 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-pink-800">
            <span className="font-bold">UVA Students Only</span> • Delivery
            available to all campus dorms and nearby apartments
          </p>
          <p className="text-pink-700 mt-2">© 2025</p>
        </div>
      </footer>
    </div>
  );
}
