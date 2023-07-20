import logoFooter from ".././assets/images/logoFooter.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo de kasa" className="logoFooter" />
      <p>© 2020 Kasa.All rights reserved</p>
    </footer>
  );
}
