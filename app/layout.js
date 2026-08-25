import './globals.css';
import '@fontsource-variable/manrope';
import '@fontsource-variable/unbounded';

export const metadata = {
  title: 'Вебсолид — веб-разработка для бизнеса',
  description: 'Сайты, интернет-магазины и веб-сервисы. От потребности до договора за 2 дня.',
};

export default function RootLayout({ children }) {
  return <html lang="ru"><body>{children}</body></html>;
}
