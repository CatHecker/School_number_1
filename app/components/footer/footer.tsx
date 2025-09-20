import "./footer.scss";

export default function Footer() {
  return (
    <footer className="contacts" aria-label="Контактная информация">
      <address className="contact-item">
        <h4>Директор</h4>
        <div>
          <a href="tel:+73477421770" className="phone">
            8(34774)21770
          </a>
          <br />
        </div>
      </address>
      <address className="contact-item">
        <h4>Заместитель директора по УВР</h4>
        <div>
          <a href="tel:+73477421770" className="phone">
            8(34774)21770
          </a>
          <br />
        </div>
      </address>
    </footer>
  );
}
