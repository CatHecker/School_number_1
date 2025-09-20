import type { Route } from "./+types/contacts";
import "./contacts.scss";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Контакты" },
    { name: "Контакты", content: "Контакты" },
  ];
}

export default function Contacts() {
  return (
    <div className="contactsPage">
      <h1>Контакты</h1>

      <section className="contact-card">
        <h2>
          Муниципальное общеобразовательное бюджетное учреждение средняя
          общеобразовательная школа №1
        </h2>
        <p>
          <strong>Краткое наименование:</strong> МОБУ СОШ №1 с. Архангельское
        </p>

        <address>
          <strong>Юридический адрес:</strong>
          <br />
          453030, Республика Башкортостан, Архангельский район, с.
          Архангельское, ул. Советская, д.53
        </address>
      </section>

      <section className="contact-persons">
        <h3>Директор</h3>
        <p>
          Рыжикова Татьяна Зиновьевна <br />
          <strong>Телефон:</strong>{" "}
          <a href="tel:+73477421770">8(34774)2-17-70</a>
          <br />
          <strong>E-mail:</strong>{" "}
          <a href="mailto:arhsch1@mail.ru">arhsch1@mail.ru</a>
        </p>

        <h3>Руководитель Центра "Точка роста"</h3>
        <p>
          Бочкарева Алевтина Викторовна, заместитель директора по НМР <br />
          <strong>Телефон:</strong>{" "}
          <a href="tel:+73477421263">8(34774) 2-12-63</a>
          <br />
          <strong>E-mail:</strong>{" "}
          <a href="mailto:alevt66@mail.ru">alevt66@mail.ru</a>
        </p>
      </section>
    </div>
  );
}
