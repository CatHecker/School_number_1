import { Link } from "react-router";
import "./style.scss";

type CustomLinkType = {
  to: string;
  close_menu: () => void;
  title: string;
};

export const CustomLink = (props: CustomLinkType) => {
  return (
    <Link to={props.to} className="link_to" onClick={props.close_menu}>
      {props.title}
    </Link>
  );
};
