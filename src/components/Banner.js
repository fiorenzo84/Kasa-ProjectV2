import bannerBackground from "../assets/images/banner.png";

export default function Banner() {
  return (
    <div className="container_BannerBackground">
      <img
        src={bannerBackground}
        alt="photographie de l'accueil"
        className="bannerBackground"
      />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}
