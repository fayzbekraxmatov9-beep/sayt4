
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Innovatsiya",
    description:
      "Yangi texnologiyalar orqali kundalik hayotni yanada qulay qilish.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Sifat",
    description:
      "Mahsulotlar va foydalanuvchi tajribasiga alohida e'tibor.",
    icon: "◇",
  },
  {
    number: "03",
    title: "Kelajak",
    description:
      "O'zaro bog'langan qurilmalar va aqlli raqamli ekotizim.",
    icon: "◎",
  },
];

export default function AboutPage() {
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
          <Link href="/about">Biz haqimizda</Link>
          <Link href="/#footer">Aloqa</Link>
        </nav>
      </header>

      <section className="about-hero">
        <div className="about-hero-content">
          <span className="eyebrow">ABOUT SAMSUNG</span>

          <h1>
            Kelajakni
            <br />
            birgalikda yaratamiz.
          </h1>

          <p>
            Texnologiyalar insonlar hayotini yaxshilashi kerak.
            Bizning maqsadimiz — yangi g'oyalar va innovatsiyalar
            orqali kundalik hayotga yangi imkoniyatlar olib kirish.
          </p>

          <Link className="button button-blue" href="/products">
            Mahsulotlarni ko'rish →
          </Link>
        </div>

        <div className="about-orb">
          <div className="orb-ring ring-one" />
          <div className="orb-ring ring-two" />
          <div className="orb-center">S</div>
          <span className="orb-caption">INNOVATION · TECHNOLOGY</span>
        </div>
      </section>

      <section className="section about-intro">
        <span className="eyebrow dark-eyebrow">
          BIZNING MAQSADIMIZ
        </span>

        <h2>
          Texnologiya odamlar uchun.
        </h2>

        <p>
          Samsung — elektronika, mobil qurilmalar va raqamli
          texnologiyalar bilan tanilgan global kompaniya.
          Galaxy qurilmalaridan tortib televizor va maishiy
          texnikagacha, texnologiyalarni kundalik hayot bilan
          bog'lashga intiladi.
        </p>
      </section>

      <section className="section about-values">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark-eyebrow">
              BIZNING QADRIYATLAR
            </span>
            <h2>Nimaga ishonamiz?</h2>
          </div>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.number}>
              <div className="value-top">
                <span>{value.number}</span>
                <span className="value-icon">{value.icon}</span>
              </div>

              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <span className="eyebrow">DISCOVER MORE</span>
        <h2>Samsung olamini kashf eting.</h2>
        <p>
          Sizga mos qurilmalar va yangi imkoniyatlar bilan tanishing.
        </p>
        <Link className="button button-white" href="/categories">
          Kategoriyalarni ko'rish →
        </Link>
      </section>

      <footer className="footer">
        <div className="footer-bottom">
          <Link className="logo" href="/">
            SAMSUNG
          </Link>
          <span>Samsung uslubidagi demo loyiha.</span>
          <Link href="/">Bosh sahifaga qaytish ↑</Link>
        </div>
      </footer>
    </main>
  );
}
