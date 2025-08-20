import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useState } from "react";
import { CartDrawer } from "../cart/cart-drawer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        Mở giỏ hàng
      </button>
      <CartDrawer isOpen={open} onClose={() => setOpen(false)} />
      <Welcome />
    </>
  );
}
