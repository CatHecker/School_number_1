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
      name: "description",
      content: "Неофициальный сайт МОБУ СОШ #1 с. Архангельское",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <NewsSlider />
      <section className="partners" aria-label="Партнеры и спонсоры">
        <a href="https://vk.com/tochkarosta_official">
          <img className="growOfPointLogo  adsImg" src={adv2} />
        </a>
        <a href="https://resh.edu.ru/">
          <img className="reshLogo  adsImg" src={adv3} />
        </a>
        <a href="https://будьвдвижении.рф/">
          <img className="firstMoveLogo  adsImg" src={adv1} />
        </a>
      </section>
    </div>
  );
}
