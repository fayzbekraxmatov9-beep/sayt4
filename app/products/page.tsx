
"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  {
    name: "Galaxy S24 Ultra",
    category: "Smartfonlar",
    price: "16 999 000 so'm",
    image:
      "https://avatars.mds.yandex.net/i?id=5c7d8860a259fbc170be5298a71086681f80f464-5540728-images-thumbs&n=13",
  },
  {
    name: "Galaxy Z Fold",
    category: "Smartfonlar",
    price: "24 999 000 so'm",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Galaxy Tab",
    category: "Planshetlar",
    price: "7 499 000 so'm",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Galaxy Book",
    category: "Noutbuklar",
    price: "12 999 000 so'm",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=85",
  },
];

export default function ProductsPage() {
  const [filter, setFilter] = useState("Barchasi");

  const filtered = products.filter(
    (product) =>
      filter === "Barchasi" || product.category === filter
  );

  return (
    <main>
      <header className="navbar">
        <Link className="logo" href="/">
          SAMSUNG
        </Link>

        <nav className="nav-links">
          <Link href="/">Bosh sahifa</Link>
          <Link href="/products">Mahsulotlar</Link>
          <Link href="/#about">Biz haqimizda</Link>
          <Link href="/#footer">Aloqa</Link>
        </nav>
      </header>

      <section className="section">
        <span className="eyebrow dark-eyebrow">
          SAMSUNG COLLECTION
        </span>
        <h1>Bizning mahsulotlar</h1>
        <p>
          O'zingizga mos qurilmani tanlang va yangi
          imkoniyatlarni kashf eting.
        </p>

        <div className="filter-row" style={{ marginTop: 30 }}>
          {["Barchasi", "Smartfonlar", "Planshetlar", "Noutbuklar"].map(
            (category) => (
              <button
                key={category}
                className={
                  filter === category
                    ? "filter-chip active"
                    : "filter-chip"
                }
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="product-grid">
          {filtered.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <span className="product-category">
                  {product.category}
                </span>
                <h3>{product.name}</h3>
                <p>Samsung texnologiyasi bilan yangi tajriba.</p>
                <div className="product-bottom">
                  <strong>{product.price}</strong>
                  <Link
                    className="round-arrow"
                    href={`/products/${encodeURIComponent(
                      product.name.toLowerCase().replaceAll(" ", "-")
                    )}`}
                    aria-label={`${product.name} tafsilotlari`}
                  >
                    ↗
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p style={{ marginTop: 35 }}>
          <Link className="text-link" href="/">
            ← Bosh sahifaga qaytish
          </Link>
        </p>
      </section>
    </main>
  );
}
