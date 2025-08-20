import { useEffect, useState } from "react";

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
      className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg relative transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold">Giỏ hàng</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ×
        </button>
      </div>
      <ul className="p-4 space-y-4">
        <li className="flex justify-between">
          <span>Áo len Giáng sinh</span>
          <span>$25</span>
        </li>
        <li className="flex justify-between">
          <span>Kẹo gậy</span>
          <span>$5</span>
        </li>
        <li className="flex justify-between">
          <span>Mũ Noel</span>
          <span>$10</span>
        </li>
      </ul>
      {showAnimation && (
        <>
          <div className="snow-container">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="snowflake">
                ❄️
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-0 w-full overflow-hidden">
            <div className="santa-animation whitespace-nowrap text-4xl">🎅🛷🦌🦌</div>
          </div>
        </>
      )}
    </div>
  );
}
