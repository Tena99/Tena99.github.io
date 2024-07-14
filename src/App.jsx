import { useState } from "react";
import "./App.css";
import Article from "./components/Article";
import profile_photo from "./assets/images/profile_photo.png";
import linkedin from "./assets/images/linkedin.svg";
import telegram from "./assets/images/telegram.svg";
import xing from "./assets/images/xing.svg";
import whatsapp from "./assets/images/whatsapp.svg";

function App() {
  return (
    <>
      <Article
        title="About me"
        subtitle="My intro"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
"
        img={profile_photo}
        contacts={[
          { key: "Phone", value: "+49 175 883 41 81" },
          { key: "Email", value: "stacyvolvis@gmail.com" },
          { key: "Location", value: "Bonn, Germany" },
        ]}
        messengers={[
          {
            name: "Telegram",
            link: "https://t.me/stacyvolvis",
            icon: telegram,
          },
          {
            name: "WhatsApp",
            link: "https://wa.me/qr/VYKDJUILP54RM1",
            icon: whatsapp,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/anastasiia-volvis-58b288223/",
            icon: linkedin,
          },
          {
            name: "Xing",
            link: "https://www.xing.com/profile/Anastasiia_Volvis/web_profiles",
            icon: xing,
          },
        ]}
      />
    </>
  );
}

export default App;
