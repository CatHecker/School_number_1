import "./news.scss";

type NewsPropsType = {
  img: string;
  text: string;
  title: string;
};

export function News(props: NewsPropsType) {
  return (
    <article className="newsBlock">
      <img src={props.img} alt={props.title} className="newsPhoto" />
      <div className="newsTxt">
        <h3 className="newsTitle">{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </article>
  );
}
