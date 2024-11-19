import styles from "./styles.module.css";

export default function Article({
  title,
  subtitle,
  img,
  text,
  contacts,
  messengers,
}) {
  return (
    <section className={styles.article_container}>
      <div className={styles.container}>
        <article className={styles.article_item}>
          <img src={img} alt="profile_photo"></img>
        </article>

        <article className={styles.article_item}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.article_description}>{text}</p>
          </div>

          <div className={styles.contacts_container}>
            {contacts
              ? contacts.map((contact) => {
                  return (
                    <p key={contact.key}>
                      <img src={contact.icon} alt="contact_icon"></img>{" "}
                      <strong>{contact.key}</strong> <span>:</span>{" "}
                      {contact.value}
                    </p>
                  );
                })
              : undefined}
          </div>

          <div>
            {messengers ? <h4>Social media</h4> : undefined}

            <div className={styles.messengers_container}>
              {messengers
                ? messengers.map((messenger) => {
                    return (
                      <a
                        key={messenger.name}
                        href={messenger.link}
                        className={styles.messenger_link}
                      >
                        <img
                          className={styles.messenger_icon}
                          src={messenger.icon}
                          alt="messenger_icon"
                        ></img>
                        <span> {messenger.name}</span>
                      </a>
                    );
                  })
                : undefined}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
