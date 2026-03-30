import { AccordionItem } from "@/src/components/Accordion";
import { ContactForm } from "@/src/components/ContactForm";
import { CircleLogo } from "@/src/icons";
import { CalendarIcon } from "@/src/icons/CalendarIcon";
import { CatalogIcon } from "@/src/icons/CatalogIcon";
import { PhoneIcon } from "@/src/icons/PhoneIcon";
import { SpeedIcon } from "@/src/icons/SpeedIcon";
import { SyncIcon } from "@/src/icons/SyncIcon";
import { UsersIcon } from "@/src/icons/UsersIcon";
import { Accordion } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        className="flex flex-col gap-10 pt-50 h-[calc(100dvh-72px)]"
        id="about"
      >
        <div className="text-center max-w-200 mx-auto">
          <h1 className="font-bold text-5xl mb-10">
            <span className="text-[#4C5EFF]">Веб</span>
            <span className="text-[#7A87FF]">Солид</span> — технологический
            партнер вашего роста
          </h1>
          <p className="text-2xl">
            Мы объединили глубокую техническую экспертизу в разработке с
            бизнес-аналитикой. Наша цель — не просто запустить сайт, а создать
            инструмент, который оптимизирует внутренние процессы компании и
            увеличивает прибыль.
          </p>
        </div>

        <Link
          href="#projects"
          className="button button--primary h-50 w-50 rounded-full mx-auto text-3xl"
        >
          Проекты
        </Link>

        <div className="flex-1 grid grid-cols-3 gap-10">
          <div className="flex flex-col justify-end col-span-2">
            <div className="relative grid grid-cols-2 py-20 rounded-t-3xl bg-white w-full px-5">
              <div>
                <div className="h-100 w-70 absolute bg-black bottom-15 left-10 rounded-3xl text-white p-4 flex flex-col gap-4 items-center">
                  <h3 className="text-lg font-bold">Наши стандарты:</h3>
                  <CircleLogo className="h-40" />
                  <ul className="flex flex-col gap-2">
                    <li>
                      <b>Прозрачность на каждом этапе</b>
                    </li>
                    <li>
                      <b> Фокус на бизнес-результат</b>
                    </li>
                    <li>
                      <b>Непрерывное развитие</b>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-2xl font-bold -ml-5">
                <span className="text-[#4C5EFF]">Веб</span>
                <span className="text-[#7A87FF]">Солид</span> - становимся
                частью вашей команды, чтобы вместе создать проект, которым будем
                гордиться
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end pb-5">
            <div className="h-50 w-60 rounded-3xl bg-[#7A87FF] mb-20">
              <div className="h-50 w-60 rounded-3xl bg-black -rotate-9 translate-y-12 -translate-x-7 text-white text-2xl font-bold text-center flex items-center justify-center">
                <p>
                  <span className="text-[#4C5EFF]">Веб</span>
                  <span className="text-[#7A87FF]">Солид</span>
                  <br />+ <br />
                  Вы
                  <br /> = <br />
                  💜
                </p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap ">
              <span className="rounded-full py-2 border-2 border-black px-3">
                Комплексная разработка
              </span>
              <span className="rounded-full py-2 border-2 border-black px-3">
                Бизнес-консалтинг и проектирование
              </span>
              <span className="rounded-full py-2 border-2 border-black px-3">
                Аналитика и скрипты продаж
              </span>
              <span className="rounded-full py-2 border-2 border-black px-3">
                Техническое сопровождение
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="mt-10">
        <h2 className="text-4xl font-bold text-accent mb-10">Проекты:</h2>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="p-3 rounded-xl bg-white">
              <Image
                src="/projects/plyazh.webp"
                alt="Проект термальный комплекс 'Пляж'"
                width={1000}
                height={624}
                className="mb-5"
              />
              <h3 className="text-xl font-bold mb-3">
                Термальный комплекс «ПЛЯЖ» (Казань)
              </h3>
              <p className="mb-3">
                Разработка современной платформы для сферы услуг и отдыха. Фокус
                на UX/UI и удобство пользователя.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-2">
                <p className="flex gap-2 items-center">
                  <span>
                    <CalendarIcon />
                  </span>
                  Система <br />
                  бронирования
                </p>
                <p className="flex gap-2 items-center">
                  <span>
                    <PhoneIcon />
                  </span>
                  Мобильная <br />
                  версия
                </p>
                <p className="flex gap-2 items-center">
                  <span>
                    <UsersIcon />
                  </span>
                  Высокая <br />
                  вовлеченность
                </p>
              </div>
              <p>
                Веб-сайт:{" "}
                <a
                  className="text-accent"
                  href="https://plyazh.pro/"
                  target="black"
                >
                  plyazh.pro
                </a>
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white">
              <Image
                src="/projects/mig-auto.webp"
                alt="Проект интернет-магазин 'МигАвто'"
                width={1000}
                height={624}
                className="mb-5"
              />
              <h3 className="text-xl font-bold mb-3">
                МИГ-АВТО (Набережные Челны)
              </h3>
              <p className="mb-3">
                Масштабный e-commerce проект для лидера рынка запчастей КАМАЗ.
                Сложная структура каталога и высокая нагрузка.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-2">
                <p className="flex gap-2 items-center">
                  <span>
                    <CatalogIcon />
                  </span>
                  Многоуровневый <br />
                  каталог
                </p>
                <p className="flex gap-2 items-center">
                  <span>
                    <SyncIcon />
                  </span>
                  Синхронизация <br />
                  остатков
                </p>
                <p className="flex gap-2 items-center">
                  <span>
                    <SpeedIcon />
                  </span>
                  Отказоустойчивость
                </p>
              </div>
              <p>Веб-сайт: В процессе разработки</p>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="p-10 rounded-xl border-2 border-white col-span-2 col-start-2 col-end-4 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-3">В разработке</h3>
              <p>
                Ряд крупных корпоративных решений и систем автоматизации
                бизнеса.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="mt-10">
        <h2 className="text-4xl font-bold text-accent mb-10">Услуги:</h2>
        <Accordion className="flex flex-col gap-4" hideSeparator>
          <AccordionItem
            title="Комплексная разработка:"
            content="Создаем высокопроизводительные лендинги, многостраничные порталы
                и интернет-магазины любой сложности. Используем современный стек
                для быстрой работы и легкого масштабирования."
          />
          <AccordionItem
            title="Бизнес-консалтинг и проектирование:"
            content="Не просто рисуем макеты, а выстраиваем логику вашего бизнеса.
                Проектируем CJM (путь клиента), внедряем CRM-системы и
                автоматизируем воронки продаж."
          />
          <AccordionItem
            title="Аналитика и скрипты продаж:"
            content="Помогаем продавать эффективнее. Разрабатываем сценарии общения с
                клиентами, анализируем каналы трафика и внедряем инструменты для
                отслеживания окупаемости."
          />
          <AccordionItem
            title="Техническое сопровождение:"
            content="Обеспечиваем бесперебойную работу проектов после запуска.
                Развиваем функционал, следим за безопасностью и адаптируем сайт
                под меняющиеся задачи бизнеса."
          />
        </Accordion>
      </section>
      <section id="team" className="mt-10">
        <h2 className="text-4xl font-bold text-accent mb-3">Команда:</h2>
        <p className="text-xl mb-10">
          У нас компактная, но мощная core-команда, усиленная проверенными
          экспертами на аутсорсе
        </p>
        <div className="grid grid-cols-3 mb-5 gap-6">
          <div className="flex flex-col items-center">
            <Image
              src="/team/Камиль.webp"
              width={640}
              height={640}
              alt="Камиль"
              className="rounded-2xl mb-3"
            />
            <h3 className="text-xl font-bold mb-1">Камиль Салихов</h3>
            <p className="text-accent">И швец, и жнец, и на дуде игрец</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/team/Виктория.webp"
              width={640}
              height={640}
              alt="Виктория"
              className="rounded-2xl mb-3"
            />
            <h3 className="text-xl font-bold mb-1">Виктория Денисова</h3>
            <p className="text-accent">Руководитель проектов</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/team/Ильназ.webp"
              width={640}
              height={640}
              alt="Ильназ"
              className="rounded-2xl mb-3"
            />
            <h3 className="text-xl font-bold mb-1">Ильназ Салихов</h3>
            <p className="text-accent">Fullstack разработчик</p>
          </div>
        </div>
        <Accordion className="flex flex-col gap-4" hideSeparator>
          <AccordionItem
            title="Управление проектами & консалтинг"
            content="Ведение проекта от идеи до внедрения, проектирование бизнес-процессов и контроль качества."
          />
          <AccordionItem
            title="Разработка"
            content="Fullstack-разработчики, создающие архитектуру бэкенда и фронтенда любой сложности."
          />
          <AccordionItem
            title="Гибкое масштабирование"
            content="При необходимости мы подключаем профильных специалистов под специфические задачи вашего проекта."
          />
        </Accordion>
      </section>
      <section id="contacts" className="mt-10">
        <h2 className="text-4xl font-bold text-accent mb-3">Контакты:</h2>
        <p className="text-xl mb-10">
          Готовы обсудить ваш проект и провести аудит бизнес-процессов.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <ContactForm />
          <div className="flex flex-col">
            <div>
              <h3 className="text-xl font-bold">Телефон:</h3>
              <a href="tel:8 995 095-91-61" className="text-accent text-lg">
                8 (995) 095-91-61
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold">E-mail:</h3>
              <a
                href="mailto:websolid9@gmail.com"
                className="text-accent text-lg"
              >
                websolid9@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold">Локация:</h3>
              <p className="text-lg">
                Работаем по всей России (с особым вниманием к проектам в
                Татарстане).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
