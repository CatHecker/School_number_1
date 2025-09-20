import type { Route } from "./+types/home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss";
import { NewsSlider } from "~/components/NewsSlider/newsSlider";
import adv1 from "@/imgs/first_logo.webp";
import adv2 from "@/imgs/TR.jpg";
import adv3 from "@/imgs/рэш.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "МОБУ СОШ #1 с.Архангельское" },
    {
      name: "МОБУ СОШ #1 с.Архангельское",
      content: "Неофициальный сайт МОБУ СОШ #1 с. Архангельское",
    },
  ];
}

export default function Home() {
  return (
    <div className="main">
      <section aria-label="Новости" className="homeNews">
        <h2 className="visually-hidden">Новости школы</h2>
        <NewsSlider />
      </section>

      <section className="partners" aria-label="Партнеры и спонсоры">
        <h2 className="visually-hidden">Партнеры школы</h2>
        <ul className="partnersList">
          <li>
            <a
              href="https://vk.com/tochkarosta_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={adv2}
                alt="Точка роста"
                className="growOfPointLogo adsImg"
              />
            </a>
          </li>
          <li>
            <a
              href="https://resh.edu.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={adv3} alt="РЭШ" className="reshLogo adsImg" />
            </a>
          </li>
          <li>
            <a
              href="https://будьвдвижении.рф/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={adv1}
                alt="Будь в движении"
                className="firstMoveLogo adsImg"
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
