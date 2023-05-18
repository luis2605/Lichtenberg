import * as BiIcons from "react-icons/bi";
import start from "../assets/sidebar_gifs/start.gif"
import uber from "../assets/sidebar_gifs/uber.gif"
import spenden from "../assets/sidebar_gifs/spenden.gif"
import aktuelles from "../assets/sidebar_gifs/aktuelles.gif"
import contact from "../assets/sidebar_gifs/contact.gif"
import mitglied from "../assets/sidebar_gifs/mitglied.gif"

const sidebarData = [
  {
    name: "Startseite",
    ref: "/Lichtenberg",
    icon: <BiIcons.BiLayout />,
    imgSource:start
  },
  {
    name: "Über uns",
    ref: "/%C3%BCber",
    icon: <BiIcons.BiNetworkChart />,
    imgSource:uber
  },
  {
    name: "Spenden",
    ref: "/spenden",
    icon: <BiIcons.BiLayout />,
    imgSource:spenden
  },
  {
    name: "Aktuelles",
    ref: "/aktuelles",
    icon: <BiIcons.BiLayout />,
    imgSource:aktuelles
  },
  {
    name: "Kontakt",
    ref: "/kontakt",
    icon: <BiIcons.BiLayout />,
    imgSource:contact
  },
  {
    name: "Mitglied werden",
    ref: "/mitglied",
    icon: <BiIcons.BiLayout />,
    imgSource:mitglied
  },
];
export default sidebarData;
