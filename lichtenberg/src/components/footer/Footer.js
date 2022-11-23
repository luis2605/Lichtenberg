import React from "react";
import classes from "./footer.module.css";
import socialfb from "../../assets/social_gifs/CLIPLY_142110010_ORGANIC_FB_ICON_400.gif";
import socialInsta from "../../assets/social_gifs/142110100_ORGANIC_IG_ICON_400.gif";
import socialYoutube from "../../assets/social_gifs/CLIPLY_142110380_ORGANIC_YT_ICON_400.gif";
import socialTiktok from "../../assets/social_gifs/CLIPLY_142110290_ORGANIC_TIKTOK_ICON_400.gif";
export const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["footer-contact-social"]}>
        <div className={classes["info"]}>
          <h2 className={classes["title"]}>Kontakt</h2>
          <p className={classes["info-text"]}>Dorfgemeinschaft Lichtenberg </p>
          <p className={classes["info-text"]}>Bergstraße 9</p>
          <p className={classes["info-text"]}>51597 Morsbach</p>
        </div>
        <div className={classes["adress"]}>
          <p className={classes["info-text"]}>Telefon: +49 2294 999 1075</p>
          <p className={classes["info-text"]}>E-Mail: dg-lichtenberg@gmx.de</p>
        </div>
        <div className={classes["social"]}>
          <h3 className={classes["social-title"]}>Folgen Sie uns:</h3>
          <a href="https://www.facebook.com/profile.php?id=100069270243759">
            <img
              className={classes["social-icons"]}
              src={socialfb}
              alt="fb-icon"
            ></img>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100069270243759">
            <img
              className={classes["social-icons"]}
              src={socialInsta}
              alt="fb-icon"
            ></img>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100069270243759">
            <img
              className={classes["social-icons"]}
              src={socialYoutube}
              alt="fb-icon"
            ></img>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100069270243759">
            <img
              className={classes["social-icons"]}
              src={socialTiktok}
              alt="fb-icon"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};
