"use client";

import * as React from "react";
import { ShoppingBag } from "lucide-react";
import SushiConveyorMenu from "@/components/ui/sushi-conveyor-menu";
import type { ConveyorDish } from "@/components/ui/sushi-conveyor-menu";

export const SUSHI_BELT_DISHES: ConveyorDish[] = [
  {
    id: "salmon-nigiri",
    name: "Salmon nigiri",
    price: "$4.20",
    tier: 2,
    description: "Two slices of fresh salmon over seasoned rice, with pickled ginger.",
    details: ["2 pieces", "Fish", "Chef's pick"],
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tuna-nigiri",
    name: "Tuna nigiri",
    price: "$6.80",
    tier: 4,
    description: "Lean red tuna over warm rice on a black lacquer plate.",
    details: ["2 pieces", "Fish"],
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ebi-nigiri",
    name: "Ebi nigiri",
    price: "$4.20",
    tier: 2,
    description: "Butterflied poached shrimp over rice, tail left on.",
    details: ["2 pieces", "Shellfish"],
    image: "https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "california-roll",
    name: "California roll",
    price: "$5.40",
    tier: 3,
    description: "Crab, avocado and cucumber, rolled inside out in orange tobiko.",
    details: ["4 pieces", "Shellfish", "Fish roe"],
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dragon-roll",
    name: "Dragon roll",
    price: "$8.50",
    tier: 5,
    description: "Shrimp tempura roll draped in avocado, finished with eel sauce.",
    details: ["4 pieces", "Shellfish", "Wheat", "Chef's pick"],
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tamago",
    name: "Tamago nigiri",
    price: "$3.20",
    tier: 1,
    description: "Sweet rolled omelette tied to rice with a band of nori.",
    details: ["2 pieces", "Egg"],
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "edamame",
    name: "Salted edamame",
    price: "$3.20",
    tier: 1,
    description: "A small bowl of steamed soybean pods with flaky sea salt.",
    details: ["1 bowl", "Soy", "Vegan"],
    image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mochi",
    name: "Mochi ice cream",
    price: "$5.40",
    tier: 3,
    description: "Matcha and strawberry mochi ice cream, one of each.",
    details: ["2 pieces", "Milk", "Dessert"],
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
  },
];

export const SUSHI_BELT_LEGEND = { 1: "$3.20", 2: "$4.20", 3: "$5.40", 4: "$6.80", 5: "$8.50" };

export default function SushiConveyorMenuDemo({ autoplay = true }: { autoplay?: boolean }) {
  const [count, setCount] = React.useState(0);
  const [flash, setFlash] = React.useState(false);
  const timer = React.useRef(0);

  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  const add = () => {
    setCount((n) => n + 1);
    setFlash(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setFlash(false), 2400);
  };

  return (
    <div data-sushi-demo className="relative flex min-h-svh w-full items-center justify-center bg-background text-foreground">
      <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
        <span aria-live="polite" className={`rounded-full bg-foreground px-2.5 py-1 text-[11px] font-medium text-background transition-[opacity,translate] duration-300 motion-reduce:transition-none ${flash ? "translate-x-0 opacity-100" : "translate-x-1 opacity-0"}`}>
          {flash ? "Added" : ""}
        </span>
        <button type="button" data-order-count aria-label={`Your order: ${count} ${count === 1 ? "plate" : "plates"}`} className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-medium text-card-foreground shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <ShoppingBag aria-hidden="true" className="size-4" />
          <span data-order-total className="tabular-nums">{count}</span>
        </button>
      </div>
      <SushiConveyorMenu
        items={SUSHI_BELT_DISHES}
        legend={SUSHI_BELT_LEGEND}
        eyebrow="Kaiten · Lunch belt"
        heading="A sushi belt that keeps turning, right on the page."
        caption="Hover to stop the belt, flick to spin it, pick a plate to order."
        autoplay={autoplay}
        onAdd={add}
        action={
          <button type="button" className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm outline-none transition-[translate,box-shadow] hover:-translate-y-px hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none">
            See full menu
          </button>
        }
      />
    </div>
  );
}
