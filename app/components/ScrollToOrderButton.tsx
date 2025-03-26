"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ScrollToOrderButton() {
  return (
    <Button
      size="lg"
      className="bg-pink-600 hover:bg-pink-700 text-xl px-8 py-6"
      onClick={() => {
        document
          .getElementById("cookies-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <ShoppingCart className="h-6 w-6 mr-3" />
      Order Now
    </Button>
  );
}
