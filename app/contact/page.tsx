
"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

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
          <Link href="/contact">Aloqa</Link>
        </nav>
      </header>

      <section className="contact-hero">
        <span className="eyebrow">WE ARE HERE FOR YOU</span>
        <h1>
          Sizni
          <br />
          tinglashga tayyormiz.
        </h1>
        <p>
          Savollaringiz bormi? Bizga yozing.
          Sizga yordam berishdan mamnunmiz.
        </p>
      </section>

      <section className="section contact-section">
        <div className="contact-info">
          <span className="eyebrow dark-eyebrow">
            BOG'LANISH
          </span>
          <h2>Biz bilan aloqada bo‘ling.</h2>
          <p>
            Savollar, takliflar yoki mahsulotlar haqida
            ma’lumot olish uchun quyidagi aloqa ma’lumotlaridan
            foydalaning.
          </p>

          <div className="contact-item">
            <span className="contact-icon">☎</span>
            <div>
              <h3>Telefon</h3>
              <a href="tel:+998712000000">
                +998 71 200 00 00
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <div>
              <h3>Elektron pochta</h3>
              <a href="mailto:info@example.com">
                info@example.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">⌖</span>
            <div>
              <h3>Manzil</h3>
              <p>Toshkent, O‘zbekiston</p>
            </div>
          </div>

          <div className="contact-note">
            <strong>Samsung uslubidagi demo sayt</strong>
            <p>
              Ushbu sahifadagi aloqa ma’lumotlari namuna
              sifatida berilgan.
            </p>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Xabar yuboring</h2>
          <p>Quyidagi maydonlarni to‘ldiring.</p>

          {sent ? (
            <div className="form-success">
              <span>✓</span>
              <h3>Rahmat!</h3>
              <p>
                Forma tekshiruvdan o‘tdi. Demo rejimida xabar
                serverga yuborilmadi.
              </p>
              <button
                className="button button-blue"
                onClick={() => setSent(false)}
              >
                Yana xabar yozish
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Ismingiz</label>
              <input
                id="name"
                type="text"
                placeholder="Ismingizni kiriting"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />

              <label htmlFor="email">Elektron pochta</label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <label htmlFor="message">Xabaringiz</label>
              <textarea
                id="message"
                placeholder="Xabaringizni yozing..."
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />

              <button className="button button-blue" type="submit">
                Xabarni yuborish →
              </button>

              <small>
                Hozircha bu demo forma. Xabarlar serverga
                yuborilmaydi.
              </small>
            </form>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-bottom">
          <Link className="logo" href="/">
            SAMSUNG
          </Link>
          <span>Samsung uslubidagi demo loyiha.</span>
          <Link href="/">← Bosh sahifa</Link>
        </div>
      </footer>
    </main>
  );
}
