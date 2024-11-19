import styles from "./App.module.css";
import Article from "./components/Article";
import Card from "./components/Card";

import profile_photo from "./assets/images/profile_photo.png";
import linkedin from "./assets/images/linkedin.svg";
import telegram from "./assets/images/telegram.svg";
import xing from "./assets/images/xing.svg";
import whatsapp from "./assets/images/whatsapp.svg";
import location from "./assets/images/location.svg";
import phone from "./assets/images/phone.svg";
import email from "./assets/images/email.svg";
import plantopia from "./assets/images/plantopia.png";

function App() {
  return (
    <>
      <h3 className={styles.subtitle}>{"My intro"}</h3>

      <Article
        title="About me"
        text="Committed to mastering multiple technologies to create world-class websites, including server-side, client-side and single-page applications.
client-side and single-page applications. Creative and adept at client and server architecture with expertise in database management. Known for problem-solving skills, attention to detail and adaptability, backed by previous IT project management experience.
by previous IT project management experience. Motivated by collaboration and strong communication skills as well as an analytical approach.
"
        img={profile_photo}
        contacts={[
          { key: "Phone", value: "+49 175 883 41 81", icon: phone },
          { key: "Email", value: "stacyvolvis@gmail.com", icon: email },
          { key: "Location", value: "Bonn, Germany", icon: location },
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

      <section className={styles.project_list}>
        <h3 className={styles.subtitle}>Recent Projects</h3>

        <div className={styles.project_list_container}>
          <Card
            imgSrc={plantopia}
            title={"Plantopia"}
            link={"https://plants-store-front.onrender.com/"}
          ></Card>

          <Card
            imgSrc={plantopia}
            title={"Plantopia"}
            link={"https://plants-store-front.onrender.com/"}
          ></Card>

          <Card
            imgSrc={plantopia}
            title={"Plantopia"}
            link={"https://plants-store-front.onrender.com/"}
          ></Card>
        </div>
      </section>
    </>
  );
}

export default App;
