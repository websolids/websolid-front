"use client";
import { useState } from "react";
import Link from "next/link";
import { contacts } from "./data";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Вебсолид — на главную">
      <svg viewBox="0 0 792 835" aria-hidden="true">
        <path
          d="M472 832c-20 10-43-5-43-28V425c0-11 7-22 17-27l302-150c20-10 43 5 43 27v379c0 12-6 22-17 28L472 832Z"
          fill="#7A87FF"
        />
        <path
          d="M0 275c0-22 23-37 44-27l301 150c11 5 18 16 18 27v379c0 23-24 38-44 28L17 682C7 676 0 666 0 654V275Z"
          fill="#A7AFFB"
        />
        <path
          d="M382 3c9-4 18-4 27 0l284 141c22 11 22 44 0 56L409 341c-8 4-18 4-27 0L99 200c-23-12-23-45 0-56L382 3Z"
          fill="#4C5EFF"
        />
      </svg>
      <span>вебсолид</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <Logo />
        <nav
          id="menu"
          className={open ? "open" : ""}
          aria-label="Основная навигация"
        >
          <Link href="/#services" onClick={() => setOpen(false)}>
            Услуги
          </Link>
          <Link href="/#cases" onClick={() => setOpen(false)}>
            Кейсы
          </Link>
          <Link href="/#process" onClick={() => setOpen(false)}>
            Как работаем
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            О компании
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)}>
            Блог
          </Link>
        </nav>
        <Link className="button small desktop-cta" href="/#contact">
          Обсудить проект <span>↗</span>
        </Link>
        <button
          className={`menu ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export function LeadForm() {
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <form className="lead-form" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="name">Как к вам обращаться</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          placeholder="Имя"
        />
      </div>
      <div className="field">
        <label htmlFor="contact">Телефон или почта</label>
        <input
          id="contact"
          name="contact"
          required
          placeholder="+7 900 000-00-00"
        />
      </div>
      <div className="field wide">
        <label htmlFor="task">Коротко о задаче</label>
        <textarea
          className="resize-none"
          id="task"
          name="task"
          rows="3"
          placeholder="Что хотите запустить или улучшить?"
        />
      </div>
      <label className="consent">
        <input type="checkbox" required />{" "}
        <span>
          Соглашаюсь на{" "}
          <Link href="/consent">обработку персональных данных</Link> и принимаю{" "}
          <Link href="/privacy">политику конфиденциальности</Link>
        </span>
      </label>
      <button className="button light wide" type="submit">
        Отправить заявку <span>↗</span>
      </button>
      {sent && (
        <p className="form-note" role="status">
          Форма готова. Подключите почту или CRM перед публикацией.
        </p>
      )}
    </form>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p>
            Веб-разработка для бизнеса.
            <br />
            По всей России.
          </p>
        </div>
        <div>
          <b>Навигация</b>
          <Link href="/#services">Услуги</Link>
          <Link href="/#cases">Кейсы</Link>
          <Link href="/about">Компания</Link>
          <Link href="/blog">Блог</Link>
        </div>
        <div>
          <b>Контакты</b>
          <a href={contacts.telegramLink} target="_blank" rel="noreferrer">
            {contacts.telegram}
          </a>
          <a href={contacts.maxLink} target="_blank" rel="noreferrer">
            {contacts.max}
          </a>
          <a href={`tel:${contacts.phoneRaw}`}>{contacts.phone}</a>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
        </div>
      </div>
      <div className="wrap footline">
        <span>© 2026 Вебсолид</span>
        <span>Собираем веб в работающую систему</span>
      </div>
    </footer>
  );
}
