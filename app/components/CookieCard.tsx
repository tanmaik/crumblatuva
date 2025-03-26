"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Cookie {
  id: number;
  name: string;
  description: string;
  image: string;
  paymentLink: string;
  featured?: boolean;
}

interface CookieCardProps {
  cookie: Cookie;
}

export default function CookieCard({ cookie }: CookieCardProps) {
  return (
    <Card className="overflow-hidden border-pink-200 hover:shadow-xl transition-shadow">
      <div className="relative h-48 bg-white">
        <Image
          src={cookie.image}
          alt={cookie.name}
          fill
          className="object-contain"
        />
        {cookie.featured && (
          <div className="absolute top-2 right-2 bg-pink-600 text-white px-2 py-0.5 rounded-full font-semibold text-xs">
            Featured
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold text-pink-800 mb-1">{cookie.name}</h3>
        <p className="text-sm text-gray-700 mb-3">{cookie.description}</p>
        <div className="flex justify-end">
          <Button
            size="sm"
            className="bg-pink-600 hover:bg-pink-700 font-bold"
            onClick={() => {
              if (cookie.paymentLink) {
                window.location.href = cookie.paymentLink;
              }
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Buy Now
          </Button>
        </div>
      </div>
    </Card>
  );
}
