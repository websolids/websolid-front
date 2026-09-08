"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import Script from "next/script";

const CONSENT_KEY = "cookie-consent";
const COUNTER_ID = 112384878;

const ConsentContext = createContext(null);

export function useConsentContext() {
  const context = useContext(ConsentContext);

  if (!context) {
    throw new Error("useConsentContext must be used inside CookieConsent");
  }

  return context;
}

function YandexMetrika({ active }) {
  if (!active) {
    return null;
  }

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){
                (m[i].a=m[i].a||[]).push(arguments)
              };
              m[i].l=1*new Date();

              for (var j=0;j<document.scripts.length;j++){
                if(document.scripts[j].src===r){
                  return;
                }
              }

              k=e.createElement(t);
              a=e.getElementsByTagName(t)[0];
              k.async=1;
              k.src=r;
              a.parentNode.insertBefore(k,a);
            })(
              window,
              document,
              'script',
              'https://mc.yandex.ru/metrika/tag.js?id=${COUNTER_ID}',
              'ym'
            );

            ym(${COUNTER_ID}, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              accurateTrackBounce: true,
              trackLinks: true
            });
          `,
        }}
      />

      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${COUNTER_ID}`}
            style={{
              position: "absolute",
              left: "-9999px",
            }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}

function CookieBanner({ onAccept, onReject }) {
  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-label="Использование cookies"
    >
      <div className="cookie-banner-inner">
        <p>
          Мы используем файлы cookie и Яндекс Метрику для анализа посещаемости
          сайта и улучшения его работы.{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Политика конфиденциальности
          </a>
        </p>

        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-btn cookie-btn-primary"
            onClick={onAccept}
          >
            Принять
          </button>

          <button
            type="button"
            className="cookie-btn cookie-btn-secondary"
            onClick={onReject}
          >
            Отклонить
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CookieConsent({ children }) {
  const [consent, setConsent] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);

    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    }

    setMounted(true);
  }, []);

  const saveConsent = useCallback((value) => {
    if (!value) {
      return;
    }

    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }, []);

  const accept = useCallback(() => {
    saveConsent("accepted");
  }, [saveConsent]);

  const reject = useCallback(() => {
    saveConsent("rejected");
  }, [saveConsent]);

  const openSettings = useCallback(() => {
    // Для текущей версии отдельные настройки не нужны.
    // При повторном изменении решения просто очищаем consent.
    localStorage.removeItem(CONSENT_KEY);
    setConsent(null);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ConsentContext.Provider
      value={{
        consent,
        openSettings,
        accept,
        reject,
      }}
    >
      {children}

      <YandexMetrika active={consent === "accepted"} />

      {consent === null && <CookieBanner onAccept={accept} onReject={reject} />}
    </ConsentContext.Provider>
  );
}
