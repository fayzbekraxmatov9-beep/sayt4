
import Link from "next/link";

const categories = [
  {
    name: "Smartfonlar",
    icon: "📱",
    description: "Galaxy S seriyasi va Z Fold qurilmalari",
    color: "#e9edff",
  },
  {
    name: "Planshetlar",
    icon: "▣",
    description: "Galaxy Tab bilan ishlash va ijod",
    color: "#e8f4ff",
  },
  {
    name: "Noutbuklar",
    icon: "💻",
    description: "Galaxy Book — unumdorlik va qulaylik",
    color: "#eeeaff",
  },
  {
    name: "Televizorlar",
    icon: "📺",
    description: "Uyda katta ekranli tomosha tajribasi",
    color: "#e4f3f0",
  },
  {
    name: "Maishiy texnika",
    icon: "🧺",
    description: "Uyingiz uchun aqlli texnologiyalar",
    color: "#f8eee7",
  },
  {
    name: "Aksessuarlar",
    icon: "🎧",
    description: "Quloqchinlar va kundalik aksessuarlar",
    color: "#f6eafa",
  },
];

export default function CategoriesPage() {
  return (
    <main>
      <header className="navbar">
        <Link className="logo" href="/">
          SAMSUNG
        </Link>

        <nav className="nav-links">
          <Link href="/">Bosh sahifa</Link>
          <Link href="/products">Mahsulotlar</Link>
          <Link href="/categories">Kategoriyalar</Link>
          <Link href="/#about">Biz haqimizda</Link>
        </nav>
      </header>

      <section className="section">
        <span className="eyebrow dark-eyebrow">
          SAMSUNG COLLECTION
        </span>

        <h1 className="categories-title">
          Mahsulot kategoriyalari
        </h1>

        <p className="categories-description">
          Samsung olamidagi barcha qurilmalarni kashf eting.
          O'zingizga mos kategoriyani tanlang.
        </p>

        <div className="categories-page-grid">
          {categories.map((category) => (
            <Link
              href={`/products?category=${encodeURIComponent(category.name)}`}
              className="category-page-card"
              key={category.name}
            >
              <div
                className="category-page-icon"
                style={{ backgroundColor: category.color }}
              >
                {category.icon}
              </div>

              <div className="category-page-info">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <span>Mahsulotlarni ko'rish →</span>
              </div>
            </Link>
          ))}
        </div>

        <Link className="text-link" href="/">
          ← Bosh sahifaga qaytish
        </Link>
      </section>
    </main>
  );
}
