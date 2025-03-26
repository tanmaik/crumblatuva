import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-4">
        <h1 className="text-3xl font-bold text-pink-800 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your order has been successfully placed. We&apos;ll deliver your cookies to
          your specified location. If you ordered before 7pm, delivery will be by midnight tonight.
          If you ordered after 7pm, delivery will be tomorrow.
        </p>
        <p className="text-gray-600 mb-6">
          Questions about your order? Call us at (703) 297-1353
        </p>
        <Link href="/">
          <Button className="bg-pink-600 hover:bg-pink-700">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
