"use client";

import { FormEvent, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Camera, Check, Clock3, Coffee, Heart, MapPin, Menu, MessageCircle, Sparkles, Users, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Category = "Todo" | "Desayunos" | "Cocina" | "Dulces";

const dishes = [
  { name: "Tostada de la casa", category: "Desayunos" as const, description: "Masa madre, aguacate, huevo pochado y hierbas frescas.", price: "$28.000", image: "top left", tag: "Favorito de la mañana" },
  { name: "Roll de canela", category: "Dulces" as const, description: "Horneado cada día, glaseado suave y mucho cariño.", price: "$15.000", image: "top right", tag: "Recién horneado" },
  { name: "Bowl de temporada", category: "Cocina" as const, description: "Vegetales asados, granos, hojas frescas y aderezo de la casa.", price: "$32.000", image: "bottom left", tag: "Fresco y colorido" },
  { name: "Focaccia de pollo", category: "Cocina" as const, description: "Pollo a la plancha, tomate, verdes y pan de romero.", price: "$34.000", image: "bottom right", tag: "Para repetir" },
];

const categories: Category[] = ["Todo", "Desayunos", "Cocina", "Dulces"];

function whatsappUrl(message: string) {
  const text = encodeURIComponent(message);
  return siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
    : `https://api.whatsapp.com/send?text=${text}`;
}

function Brand() {
  return <a className="brand" href="#inicio" aria-label="Miga y Mesa, ir al inicio"><span className="brand-icon" aria-hidden="true"><Coffee size={23} strokeWidth={1.8} /></span><span>miga<span className="brand-amp">&</span>mesa<span className="brand-dot">.</span></span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<Category>("Todo");
  const [selectedDish, setSelectedDish] = useState<string>("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [note, setNote] = useState("");

  const visibleDishes = dishes.filter((dish) => category === "Todo" || dish.category === category);

  function chooseDish(dishName: string) {
    setSelectedDish(dishName);
    document.getElementById("reservas")?.scrollIntoView({ behavior: "smooth" });
  }

  function submitReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      `Hola, soy ${name.trim()}. Me gustaría reservar una mesa en ${siteConfig.name}.`,
      `Fecha: ${date}.`,
      `Hora: ${time}.`,
      `Personas: ${guests}.`,
      selectedDish ? `Me llamó la atención: ${selectedDish}.` : "",
      note.trim() ? `Nota: ${note.trim()}.` : "",
      "¿Tienen disponibilidad?",
    ].filter(Boolean).join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <div className="top-note"><span className="top-note-star">✳</span> Una buena pausa siempre tiene lugar en la mesa <span className="top-note-star">✳</span></div>
    <header className="site-header">
      <div className="header-inner container">
        <Brand />
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegación principal">
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menú</a>
          <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nuestra casa</a>
          <a href="#reservas" onClick={() => setMenuOpen(false)}>Reservas</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
        <a className="header-cta" href="#reservas">Reserva tu mesa <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main id="contenido">
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="Croissant relleno y café sobre una mesa cálida junto a la ventana" />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow"><span className="tiny-line" /> CAFÉ, COCINA Y BUENAS PAUSAS</span>
            <h1 id="hero-title">Aquí el día<br />sabe <em>mejor.</em></h1>
            <p>Un café para quedarse un rato más. Desayunos sin prisa, platos que reconfortan y una mesa lista para ti.</p>
            <div className="hero-actions"><a className="button button-light" href="#menu">Explorar el menú <ArrowUpRight size={18} /></a><a className="text-link light-link" href="#reservas">Reservar una mesa <ArrowRight size={17} /></a></div>
          </div>
          <div className="hero-bottom"><span>HECHO PARA COMPARTIR, DISFRUTAR Y VOLVER</span><a href="#menu" aria-label="Ir al menú"><ArrowDown size={21} /></a></div>
        </div>
        <div className="hero-stamp" aria-hidden="true"><span>BUEN CAFÉ<br />BUENA MESA</span><Sparkles size={20} /></div>
      </section>

      <div className="ticker" aria-label="Café fresco, cocina honesta y momentos para compartir"><div className="ticker-inner"><span>CAFÉ RECIÉN HECHO</span><b>✳</b><span>COCINA CON INTENCIÓN</span><b>✳</b><span>LA PAUSA QUE MERECES</span><b>✳</b><span>CAFÉ RECIÉN HECHO</span><b>✳</b><span>COCINA CON INTENCIÓN</span></div></div>

      <section className="intro-section section" aria-labelledby="intro-title"><div className="container intro-grid"><div className="intro-kicker"><span className="eyebrow">01 / BIENVENIDO A LA MESA</span><span className="intro-squiggle" aria-hidden="true">〰</span></div><div><h2 id="intro-title">La vida pasa<br /><em>entre bocados.</em></h2><p>Creemos en los planes sencillos que terminan siendo los mejores: una primera taza, algo rico para compartir y tiempo para conversar.</p></div><div className="intro-side"><div className="intro-circle"><Heart size={26} strokeWidth={1.4} /><span>HECHO CON<br />CARIÑO</span></div><p>Ven por el café.<br />Quédate por el momento.</p></div></div></section>

      <section className="menu-section section" id="menu" aria-labelledby="menu-title"><div className="container">
        <div className="section-heading"><div><span className="eyebrow">02 / PARA CADA ANTOJO</span><h2 id="menu-title">Algo bueno<br /><em>te espera aquí.</em></h2></div><p>De la primera taza al último bocado, nuestra carta está pensada para disfrutar a tu ritmo.</p></div>
        <div className="menu-toolbar"><div className="filters" role="group" aria-label="Filtrar menú">{categories.map((item) => <button key={item} type="button" className={category === item ? "filter active" : "filter"} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><span className="menu-count">{String(visibleDishes.length).padStart(2, "0")} OPCIONES PARA TI</span></div>
        <div className="dish-grid">{visibleDishes.map((dish, index) => <article className="dish-card" key={dish.name}><div className="dish-photo" style={{ backgroundPosition: dish.image }} role="img" aria-label={dish.name} /><div className="dish-card-body"><div className="dish-meta"><span>{dish.category.toUpperCase()}</span><span>0{index + 1}</span></div><div className="dish-title-row"><h3>{dish.name}</h3><strong>{dish.price}</strong></div><p>{dish.description}</p><div className="dish-footer"><span><Sparkles size={14} /> {dish.tag}</span><button type="button" onClick={() => chooseDish(dish.name)} aria-label={`Me interesa ${dish.name}, ir a reservas`}><ArrowUpRight size={20} /></button></div></div></article>)}</div>
        <p className="demo-note">Platos y precios de demostración. Se pueden adaptar a la carta real del negocio.</p>
      </div></section>

      <section className="story-section" id="nosotros" aria-labelledby="story-title"><div className="story-visual"><div className="story-photo" role="img" aria-label="Café y pan recién servido en una mesa junto a la ventana" /><div className="story-tag">UN RATO MÁS<br /><em>siempre cabe</em></div></div><div className="story-content"><span className="eyebrow">03 / NUESTRA FORMA DE VERLO</span><h2 id="story-title">Un lugar para<br /><em>hacer una pausa.</em></h2><p>No hace falta una gran ocasión para sentarse a la mesa. Aquí nos gustan los ingredientes honestos, el café bien hecho y las conversaciones que se alargan.</p><div className="story-points"><div><span>01</span><strong>Hecho con calma</strong><p>Sabores cercanos, preparados con atención.</p></div><div><span>02</span><strong>Para compartir</strong><p>Una mesa abierta a todos tus planes.</p></div></div><a className="text-link" href="#reservas">Encuentra tu mesa <ArrowUpRight size={18} /></a></div></section>

      <section className="booking-section section" id="reservas" aria-labelledby="booking-title"><div className="container booking-grid"><div className="booking-intro"><span className="eyebrow">04 / TE GUARDAMOS UN LUGAR</span><h2 id="booking-title">La mesa está<br /><em>casi lista.</em></h2><p>Cuéntanos cuándo quieres venir y preparamos tu mensaje para consultar disponibilidad por WhatsApp.</p><div className="booking-aside"><div><CalendarDays size={24} /><span>Elige tu fecha<br />y hora ideal</span></div><div><Users size={24} /><span>Ven solo o<br />con tu gente</span></div></div><div className="booking-doodle" aria-hidden="true">✳</div></div>
        <form className="booking-form" onSubmit={submitReservation}><div className="form-top"><span>PREPARA TU VISITA</span><span>01 — 04</span></div><div className="field full"><label htmlFor="name">Tu nombre <span aria-hidden="true">*</span></label><input id="name" name="name" type="text" autoComplete="name" required value={name} onChange={(event) => setName(event.target.value)} placeholder="¿Cómo te llamas?" /></div><div className="field-row"><div className="field"><label htmlFor="date">Fecha <span aria-hidden="true">*</span></label><input id="date" name="date" type="date" required value={date} onChange={(event) => setDate(event.target.value)} /></div><div className="field"><label htmlFor="time">Hora <span aria-hidden="true">*</span></label><input id="time" name="time" type="time" required value={time} onChange={(event) => setTime(event.target.value)} /></div></div><div className="field-row"><div className="field"><label htmlFor="guests">Personas <span aria-hidden="true">*</span></label><select id="guests" name="guests" value={guests} onChange={(event) => setGuests(event.target.value)}>{[1,2,3,4,5,6,7,8].map((count) => <option key={count} value={count}>{count} {count === 1 ? "persona" : "personas"}</option>)}</select></div><div className="field"><label htmlFor="dish">Algo que quieras probar</label><select id="dish" name="dish" value={selectedDish} onChange={(event) => setSelectedDish(event.target.value)}><option value="">Lo decidiré allí</option>{dishes.map((dish) => <option key={dish.name} value={dish.name}>{dish.name}</option>)}</select></div></div><div className="field full"><label htmlFor="note">¿Algo más que debamos saber?</label><textarea id="note" name="note" rows={3} maxLength={300} value={note} onChange={(event) => setNote(event.target.value)} placeholder="Una ocasión especial, alguna preferencia..." /></div><button className="button button-wine form-submit" type="submit"><MessageCircle size={18} /> Consultar por WhatsApp <ArrowUpRight size={18} /></button><p className="form-note"><Check size={15} /> Esto prepara un mensaje; la reserva se confirma cuando el local te responda.</p>{!siteConfig.whatsappNumber && <p className="form-demo">Demo: todavía no hay número del negocio configurado. WhatsApp te pedirá elegir un contacto.</p>}</form>
      </div></section>

      <section className="closing-section"><div className="container closing-inner"><span className="eyebrow">NOS VEMOS PRONTO</span><h2>La próxima buena historia<br />empieza <em>en la mesa.</em></h2><a className="button button-light" href="#reservas">Quiero reservar <ArrowUpRight size={18} /></a></div></section>
    </main>

    <footer className="footer" id="contacto"><div className="container footer-main"><div className="footer-brand"><Brand /><p>Café, cocina y un lugar para hacer una pausa. Cada visita tiene algo especial.</p></div><div><h3>EXPLORA</h3><a href="#menu">Menú</a><a href="#nosotros">Nuestra casa</a><a href="#reservas">Reservas</a></div><div><h3>ENCUÉNTRANOS</h3><span><MapPin size={16} /> {siteConfig.address}</span><span><Clock3 size={16} /> {siteConfig.hours}</span><a href={whatsappUrl("Hola, quisiera información sobre Miga & Mesa.")} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp</a>{siteConfig.instagramUrl && <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer"><Camera size={16} /> Instagram</a>}</div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} MIGA & MESA · SITIO DEMOSTRATIVO</span><span>Hecho para compartir.</span></div></footer>
  </>;
}
