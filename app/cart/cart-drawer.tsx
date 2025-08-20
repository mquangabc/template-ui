import { useEffect, useState } from "react";

export function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isOpen) {
      setShowAnimation(false);
      timer = setTimeout(() => setShowAnimation(true), 3000);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 max-w-full bg-white shadow-lg  transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full overflow-y-auto">
        <header className="bg-green-700 text-white p-4 flex justify-between items-center">
          <h2 className="font-bold">Your Cart (1)</h2>
          <button onClick={onClose} className="text-white hover:text-green-200">
            ×
          </button>
        </header>
        <div className="bg-green-50 text-green-900 text-sm px-4 py-2 flex justify-between">
          <span>Your products are reserved for</span>
          <span className="font-mono font-semibold">00:19:52 minutes!</span>
        </div>
        <div className="px-4 py-3">
          <div className="bg-green-100 h-2 rounded">
            <div
              className="bg-green-500 h-full rounded"
              style={{ width: "70%" }}
            />
          </div>
          <p className="text-xs text-green-700 text-center mt-1">
            $200.00 away from Free Product
          </p>
          <div className="flex justify-between text-xs text-green-700 mt-2">
            <span>🚚 Free Shipping</span>
            <span>🎁 Discount Product</span>
            <span>🎉 Free Product</span>
          </div>
        </div>
        <ul className="px-4 space-y-4 overflow-y-auto flex-1">
          <li className="flex gap-3">
            <img
              src="https://via.placeholder.com/80"
              alt="Snowboard"
              className="w-20 h-20 rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">
                The Collection Snowboard: Hydrogen
              </h3>
              <p className="text-sm text-gray-500">Size: M</p>
              <p className="text-sm text-gray-500">Color: Red</p>
              <div className="flex items-center mt-2">
                <button className="px-2">-</button>
                <span className="px-2">1</span>
                <button className="px-2">+</button>
                <span className="ml-auto font-semibold">$200.00</span>
              </div>
            </div>
          </li>
        </ul>
        <div className="bg-green-50 px-4 py-3">
          <h4 className="font-semibold text-sm">You may also like</h4>
          <div className="flex gap-3 mt-2 items-start">
            <img
              src="https://via.placeholder.com/64"
              alt="Pink Rabbit Hoodie"
              className="w-16 h-16 rounded"
            />
            <div className="flex-1 text-sm">
              <p className="font-semibold">Pink Rabbit Hoodie</p>
              <p>$250.50</p>
              <select className="mt-1 border rounded w-full text-sm">
                <option>Nutmeg Options</option>
              </select>
            </div>
            <button className="border border-green-600 text-green-600 rounded px-2 py-1 text-sm">
              +
            </button>
          </div>
        </div>
        <div className="px-4 py-3 border-t">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm">Gift Wrapping</p>
            <input type="checkbox" className="accent-green-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Perfect for any occasion, our high-quality wrapping paper adds a
            touch of sophistication to your gifts.
          </p>
        </div>
        <div className="px-4 py-3 border-t">
          <input
            type="text"
            placeholder="Your discount code"
            className="w-full border rounded p-2 text-sm"
          />
        </div>
        <div className="px-4 py-3 flex justify-between text-sm">
          <span>Discounts</span>
          <span className="text-green-600">AUTO 5</span>
          <span>- $36.00</span>
        </div>
        <div className="px-4 pb-4 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>$84.00</span>
        </div>
        <div className="px-4 pb-4">
          <button className="w-full bg-green-600 text-white py-3 rounded">
            Checkout
          </button>
          <button className="w-full mt-2 text-green-700 underline">
            Continue Shopping
          </button>
        </div>
      </div>
      {showAnimation && (
        <div className="santa-container">
          <div className="santa-animation inline-block">
            <svg
              className="santa-sleigh"
              viewBox="0 0 120 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text x="0" y="16" fontSize="16">
                🎅
              </text>
              <text x="18" y="16" fontSize="16">
                🛷
              </text>
              <text x="50" y="16" fontSize="16">
                🦌
              </text>
              <text x="70" y="16" fontSize="16">
                🦌
              </text>
              <line
                x1="16"
                y1="8"
                x2="50"
                y2="8"
                stroke="gold"
                strokeWidth="2"
              />
              <line
                x1="16"
                y1="8"
                x2="70"
                y2="8"
                stroke="gold"
                strokeWidth="2"
              />
            </svg>
            <div className="santa-trail">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="snow-dust" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
