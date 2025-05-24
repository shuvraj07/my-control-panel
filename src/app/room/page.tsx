"use client";

import { useState } from "react";
import { CheckCircle, ShoppingBag, X } from "lucide-react";

type Product = { id: number; title: string; price: number; img: string };

export default function SingleRoom() {
  const products: Product[] = [
    { id: 1, title: "T-Shirt", price: 29, img: "/prod1.jpg" },
    { id: 2, title: "Hoodie", price: 59, img: "/prod2.jpg" },
    { id: 3, title: "Stickers", price: 9, img: "/prod3.jpg" },
    { id: 4, title: "Mug", price: 19, img: "/prod4.jpg" },
  ];

  const [muted, setMuted] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const [bag, setBag] = useState<Product[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const addToBag = (p: Product) => setBag((b) => [...b, p]);
  const total = bag.reduce((sum, p) => sum + p.price, 0);

  const handlePay = () => {
    setBag([]);
    setBagOpen(false);
    setPaymentSuccess(true);
    setTimeout(() => setPaymentSuccess(false), 3000);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <section className="flex-1 grid gap-6 p-4 sm:p-6 max-w-6xl mx-auto w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* Stage */}
          <div className="bg-white rounded-2xl shadow p-4 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <img
                  src="/avatar-placeholder.png"
                  alt="Company avatar"
                  className="h-10 w-10 rounded-full object-cover bg-gray-200"
                />
                <h2 className="text-lg sm:text-xl font-medium">
                  Acme Corp AMA
                </h2>
              </div>
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
            </div>
            <div className="h-64 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
              Audio / chat placeholder
            </div>
          </div>

          {/* Products */}
          <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
            <h3 className="text-lg font-medium mb-4">Featured Products</h3>
            <div className="flex flex-col gap-4 sm:flex-row sm:overflow-x-auto sm:pb-2">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="flex sm:block items-center gap-4 min-w-[160px] rounded-xl border bg-gray-50 shadow-sm"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-24 w-24 sm:w-full sm:h-24 object-cover rounded-l-xl sm:rounded-t-xl"
                  />
                  <div className="flex-1 p-2 sm:p-3">
                    <p className="text-sm font-medium truncate">{p.title}</p>
                    <p className="text-xs text-gray-600">${p.price}</p>
                    <button
                      onClick={() => addToBag(p)}
                      className="mt-1 text-xs px-2 py-1 rounded bg-black text-white hover:bg-gray-800"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow p-6 space-y-4 hidden lg:block">
          <h3 className="text-lg font-medium">Rules And Regulations</h3>
          <p className="text-sm text-gray-600">
            Reserve this area for chat or host bios.
          </p>
        </aside>
      </section>

      {/* Footer Controls */}
      <footer className="h-16 sm:h-20 bg-white shadow-inner flex items-center justify-center gap-3 sm:gap-6 p-4 sticky bottom-0">
        <button
          onClick={() => setMuted(!muted)}
          className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-sm"
        >
          {muted ? "Unmute" : "Mute"}
        </button>

        <button
          onClick={() => setHandRaised(!handRaised)}
          className={`px-4 py-2 rounded-xl text-sm ${
            handRaised
              ? "bg-yellow-400 hover:bg-yellow-500"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {handRaised ? "Lower Hand" : "Raise Hand"}
        </button>

        <button
          onClick={() => alert("Leaving the room…")}
          className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 text-sm"
        >
          Leave
        </button>

        {/* Shopping Bag Icon */}
        <button
          onClick={() => setBagOpen(true)}
          className="relative p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ShoppingBag className="h-5 w-5" />
          {bag.length > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 text-[11px] rounded-full bg-red-500 text-white flex items-center justify-center">
              {bag.length}
            </span>
          )}
        </button>
      </footer>

      {/* Bag Panel */}
      {bagOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="flex-1 bg-black/40"
            onClick={() => setBagOpen(false)}
          />
          <aside className="w-80 max-w-full bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Your Bag</h3>
              <X
                className="h-5 w-5 cursor-pointer"
                onClick={() => setBagOpen(false)}
              />
            </div>
            {bag.length === 0 ? (
              <p className="text-sm text-gray-500">Bag is empty.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {bag.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-12 w-12 rounded object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-gray-600">${item.price}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t pt-4 flex justify-between text-sm font-medium">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <button
                  onClick={handlePay}
                  className="mt-4 w-full py-2 rounded-xl bg-black text-white hover:bg-gray-800 text-sm"
                >
                  Pay
                </button>
              </>
            )}
          </aside>
        </div>
      )}

      {/* Payment Success Overlay */}
      {paymentSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">Payment Successful!</h3>
            <p className="text-sm text-gray-600">Thanks for your purchase.</p>
          </div>
        </div>
      )}
    </main>
  );
}
