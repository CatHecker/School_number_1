declare module "react-slick" {
  import React from "react";

  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    [key: string]: any;
  }

  export default class Slider extends React.Component<Settings> {}
}
