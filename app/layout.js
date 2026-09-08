import "./globals.css";

import "@fontsource-variable/manrope";
import "@fontsource-variable/unbounded";

import CookieConsent from "./CookieConsent";

export const metadata = {
  title: "Вебсолид — веб-разработка для бизнеса",
  description:
    "Сайты, интернет-магазины и веб-сервисы. От потребности до договора за 2 дня.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <CookieConsent>{children}</CookieConsent>
      </body>
    </html>
  );
}
