import styles from "./App.module.css";
import Article from "./components/Article";
import Card from "./components/Card";
import List from "./components/List";

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
        img="./profile_photo.png"
        contacts={[
          { key: "Phone", value: "+49 175 883 41 81", icon: "./phone.svg" },
          { key: "Email", value: "stacyvolvis@gmail.com", icon: "./email.svg" },
          { key: "Location", value: "Bonn, Germany", icon: "./location.svg" },
        ]}
        messengers={[
          {
            name: "Telegram",
            link: "https://t.me/stacyvolvis",
            icon: "./telegram.svg",
          },
          {
            name: "WhatsApp",
            link: "https://wa.me/qr/VYKDJUILP54RM1",
            icon: "./whatsapp.svg",
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/anastasiia-volvis-58b288223/",
            icon: "./linkedin.svg",
          },
          {
            name: "Xing",
            link: "https://www.xing.com/profile/Anastasiia_Volvis/web_profiles",
            icon: "./xing.svg",
          },
        ]}
      />

      <section className={styles.project_list}>
        <h3 className={styles.subtitle}>Recent Projects</h3>

        <div className={styles.project_list_container}>
          <Card
            imgSrc="./plantopia.png"
            title={"Plantopia"}
            link={"https://plants-store-front.onrender.com/"}
          ></Card>

          <Card
            imgSrc="./plantopia.png"
            title={"Plantopia"}
            link={"https://plants-store-front.onrender.com/"}
          ></Card>

          <Card
            imgSrc="./plantopia.png"
            title={"Plantopia"}
            link={"https://plants-store-front.onrender.com/"}
          ></Card>
        </div>
      </section>

      <section className={styles.skill_list}>
        <h3 className={styles.subtitle}>What I Bring</h3>

        <div className={styles.skill_list_container}>
          <div className={styles.skill_item}>
            <List
              imgSrc="./people.svg"
              title={"Social Skills"}
              list={[
                { img: "./checkmark.svg", title: "Time Management" },
                { img: "./checkmark.svg", title: "Business Communication" },
                { img: "./checkmark.svg", title: "Multitasking" },
                { img: "./checkmark.svg", title: "Sense of Responsibility" },
                { img: "./checkmark.svg", title: "Self-Motivation" },
                { img: "./checkmark.svg", title: "Teamwork" },
                { img: "./checkmark.svg", title: "Flexibility" },
              ]}
            />

            <List
              imgSrc="./code.svg"
              title={"Technical Skills"}
              list={[
                { img: "./html.svg", title: "HTML" },
                { img: "./css.svg", title: "CSS" },
                { img: "./js.svg", title: "JavaScript" },
                { img: "./react.svg", title: "React.js" },
                {
                  img: "./library.svg",
                  title: "UI Libraries (Bootstrap, MUI, AntD)",
                },
                { img: "./express.svg", title: "Express.js" },
                { img: "./database.svg", title: "SQL & NoSQL Databases" },
                {
                  img: "./localisation.svg",
                  title: "Localization (i18next Library)",
                },
                { img: "./bug.svg", title: "Testing" },
              ]}
            />
          </div>

          <List
            imgSrc="./languages.svg"
            title={"Languages"}
            list={[
              { img: "./de-language.svg", title: "German - B2" },
              { img: "./en-language.svg", title: "English - C1" },
              { img: "./uk-language.svg", title: "Ukrainian (Native)" },
              { img: "./ru-language.svg", title: "Russian (Native)" },
            ]}
          ></List>
        </div>
      </section>
    </>
  );
}

export default App;
