import React from "react";

export default function Banner(props) {
  let className = "container_BannerBackground";
  if (props.isInAbout) {
    className += " aboutBanner";
  }

  return (
    <div className={className}>
      <img
        src={props.image}
        alt="photographie de l'accueil"
        className="bannerBackground"
      />
      {!props.isInAbout && props.text && <p>{props.text}</p>}
    </div>
  );
}
