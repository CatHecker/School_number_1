import "./header.scss";
import logo from "../../src/imgs/globe.png";
import { SearchInput } from "../search_input/search_input";
import { SideMenu } from "../side_menu/SideMenu";
import { useState } from "react";

export function Header() {
  let [menu_opened, set_menu] = useState(false);

  const openMenu = () => {
    set_menu(!menu_opened);
  };

  return (
    <header className="siteHeader">
      <div className="logo_block">
        <img src={logo} className="logo" alt="Логотип школы" />
        <div className="logo_text">
          <h1>МОБУ СОШ 1</h1>
          <h4>с. Архангельское</h4>
        </div>
      </div>
      <nav aria-label="Основная навигация" className="mainNav">
        <SearchInput />
        <button
          onClick={openMenu}
          className={`burger-button ${menu_opened ? "open" : ""}`}
          aria-label={menu_opened ? "Закрыть меню" : "Открыть меню"}
        >
          <span />
          <span />
          <span />
        </button>
        <SideMenu set_menu={set_menu} menu_opened={menu_opened} />
      </nav>
    </header>
  );
}
