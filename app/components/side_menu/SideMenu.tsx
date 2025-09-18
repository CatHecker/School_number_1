import "./style.scss";
import { CustomLink } from "../CustomLink/CustomLink";

type MenuProps = {
  menu_opened: boolean;
  set_menu: (menu_opened: boolean) => void;
};

export const SideMenu = function (props: MenuProps) {
  let closeMenu = () => {
    props.set_menu(false);
  };
  return (
    <div className={"navigation " + (props.menu_opened ? "opened" : "closed")}>
      <CustomLink title="Главная" to="/" close_menu={closeMenu} />
      <CustomLink title="О школе" to="/about" close_menu={closeMenu} />
      <CustomLink title="История" to="/history" close_menu={closeMenu} />
      <CustomLink title="Родителям" to="/parents" close_menu={closeMenu} />
      <CustomLink title="Ученикам" to="/students" close_menu={closeMenu} />
      <CustomLink title="Учителям" to="/teachers" close_menu={closeMenu} />
      <CustomLink title="Питание" to="/nutrition" close_menu={closeMenu} />
      <CustomLink title="Контакты" to="/contacts" close_menu={closeMenu} />
    </div>
  );
};
