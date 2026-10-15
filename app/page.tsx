
"use client";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "Smartfonlar", icon: "📱" },
  { name: "Planshetlar", icon: "▣" },
  { name: "Noutbuklar", icon: "💻" },
  { name: "Televizorlar", icon: "📺" },
  { name: "Maishiy texnika", icon: "🧺" },
  { name: "Aksessuarlar", icon: "🎧" },
];

const products = [
  {
    name: "Galaxy S24 Ultra",
    description: "Kuchli. Aqlli. Mukammal.",
    price: "16 999 000 so'm",
    image:
      "https://avatars.mds.yandex.net/i?id=dd5d3080b48af7047921d0d929258582c802dbb3-12831326-images-thumbs&n=13",
    category: "Smartfonlar",
  },
  {
    name: "Galaxy Z Fold",
    description: "Yangi imkoniyatlar olami",
    price: "24 999 000 so'm",
    image:
      "https://avatars.mds.yandex.net/i?id=b9dd86918e7ad4d8e22586b3d9d7f0d2d0091bac-12423532-images-thumbs&n=13",
    category: "Smartfonlar",
  },
  {
    name: "Galaxy Tab",
    description: "Ijod va samaradorlik",
    price: "7 499 000 so'm",
    image:
      "https://avatars.mds.yandex.net/i?id=9dd5f1c6ca244a560cface810a7bc531a6871ff9-5312564-images-thumbs&n=13",
    category: "Planshetlar",
  },
  {
    name: "Galaxy Book",
    description: "Ishlash uchun yangi daraja",
    price: "12 999 000 so'm",
    image:
      "https://avatars.mds.yandex.net/i?id=a26ec80c68b64812862ba519fb631f4f0aef157f-8326073-images-thumbs&n=13",
    category: "Noutbuklar",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Barchasi" ||
      product.category === activeCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <header className="navbar">
        <a className="logo" href="#" aria-label="Samsung bosh sahifa">
          SAMSUNG
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menyuni ochish"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Mahsulotlar
          </Link>
          <Link href="/categories" onClick={() => setMenuOpen(false)}>
            Kategoriyalar
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            Biz haqimizda
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Aloqa
          </Link>
        </nav>

        <button
          className="search-button"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Qidiruv"
        >
          {searchOpen ? "✕" : "⌕"}
        </button>
      </header>

      {searchOpen && (
        <div className="search-panel">
          <input
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Galaxy, planshet, noutbuk..."
            aria-label="Mahsulot qidirish"
          />
          <a href="#products" onClick={() => setSearchOpen(false)}>
            Natijalarni ko'rish →
          </a>
        </div>
      )}

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">GALAXY S24 SERIES</span>
          <h1>Yangi davr boshlanadi.</h1>
          <p>
            Sun’iy intellekt bilan yanada qudratli,
            yanada aqlli, yanada siz uchun.
          </p>
          <div className="hero-actions">
            <a className="button button-blue" href="#products">
              Batafsil ko‘rish
            </a>
            <a className="button button-outline" href="#categories">
              Modellarni tanlash
            </a>
          </div>
          <span className="hero-note">Galaxy AI — imkoniyatlar cheksiz.</span>
        </div>

        <div className="hero-visual">
          <img
            src="https://avatars.mds.yandex.net/i?id=5c7d8860a259fbc170be5298a71086681f80f464-5540728-images-thumbs&n=13"
            alt="Galaxy uslubidagi zamonaviy smartfon"
          />
          <div className="hero-badge">
            <span>GALAXY AI ✦</span>
            <small>Kelajakni bugun his qiling</small>
          </div>
        </div>
      </section>

      <section className="section categories" id="categories">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark-eyebrow">KASHF ETING</span>
            <h2>Mahsulot toifalari</h2>
          </div>
          <a className="text-link" href="#products">
            Barchasini ko‘rish →
          </a>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <button
              className="category-card"
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name);
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="category-icon">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section products" id="products">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark-eyebrow">SIZ UCHUN TANLANDI</span>
            <h2>Mashhur mahsulotlar</h2>
          </div>
          <a
            className="text-link"
            href="#products"
            onClick={() => setActiveCategory("Barchasi")}
          >
            Barchasini ko‘rish →
          </a>
        </div>

        <div className="filter-row">
          {["Barchasi", "Smartfonlar", "Planshetlar", "Noutbuklar"].map(
            (category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "filter-chip active"
                    : "filter-chip"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="product-grid">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="product-category">
                    {product.category}
                  </span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-bottom">
                    <strong>{product.price}</strong>
                    <a
                      className="round-arrow"
                      href="#about"
                      aria-label={`${product.name} haqida`}
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p className="empty-state">
              Mahsulot topilmadi. Boshqa so‘z bilan qidiring.
            </p>
          )}
        </div>
      </section>

      <section className="ecosystem section" id="about">
        <div className="ecosystem-copy">
          <span className="eyebrow">CONNECTED LIVING</span>
          <h2>Barcha qurilmalaringiz. Bitta ekotizim.</h2>
          <p>
            Samsung qurilmalari birgalikda yanada qulay hayot
            va yangi imkoniyatlarni taqdim etadi.
          </p>
          <a className="button button-white" href="#categories">
            Ko‘proq bilish →
          </a>
        </div>
        <div className="ecosystem-symbol">SAMSUNG<span>✦</span></div>
      </section>

      <footer className="footer" id="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="logo" href="#">
              SAMSUNG
            </a>
            <p>Innovatsiyalar hayotingiz uchun.</p>
            <span className="socials">YouTube · Instagram · Facebook</span>
          </div>

          <div className="footer-column">
            <h4>Mahsulotlar</h4>
            <a href="#categories">Smartfonlar</a>
            <a href="#categories">Planshetlar</a>
            <a href="#categories">Televizorlar</a>
            <a href="#categories">Maishiy texnika</a>
          </div>

          <div className="footer-column">
            <h4>Xizmatlar</h4>
            <a href="#footer">Yordam markazi</a>
            <a href="#footer">Yetkazib berish</a>
            <a href="#footer">Kafolat</a>
            <a href="#footer">Savollar</a>
          </div>

          <div className="footer-column">
            <h4>Aloqa</h4>
            <a href="tel:+998972988788">+998 97 298 87 88</a>
            <a href="mailto:info@example.com">Elektron pochta</a>
            <span>Toshkent, O‘zbekiston</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Samsung uslubidagi demo sayt.</span>
          <span>Maxfiylik · Foydalanish shartlari</span>
        </div>
      </footer>
    </main>
  );
}
