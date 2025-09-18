import Slider from "react-slick";
import news1 from "../../src/imgs/news1.jpeg";
import news2 from "../../src/imgs/news2.jpeg";
import news3 from "../../src/imgs/news3.jpeg";
import { News } from "../News/News";
import { useEffect, useState } from "react";
import "./style.scss";

const newsData = [
  {
    img: news1,
    title: "Классное питание - отличное образование!",
    text: '1 сентября 2025 года ... отличное образование!", призванная поддержать здоровый образ жизни среди наших первоклассников и второклассников.',
  },
  {
    img: news2,
    title: "Здоровым быть здорово!",
    text: "В рамках месячника антинаркотической ... по сохранению здоровья детей и подростков.",
  },
  {
    img: news3,
    title: "Акция «Стоп ВЕЙП»",
    text: "В рамках месячника ... по теме 'Вейп - радости или гадость?'",
  },
];

export function NewsSlider() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const settings = {
    dots: true, // буллеты под слайдером
    infinite: true, // бесконечная прокрутка
    speed: 500, // скорость анимации
    slidesToShow: 1, // количество видимых карточек
    slidesToScroll: 1, // сколько перелистывать за раз
    autoplay: true,
    autoplaySpeed: 8000,
  };

  if (!isClient) return null;
  return (
    <Slider {...settings} className="sliderNews">
      {newsData.map((news, idx) => (
        <div key={idx}>
          <News img={news.img} title={news.title} text={news.text} />
        </div>
      ))}
    </Slider>
  );
}
