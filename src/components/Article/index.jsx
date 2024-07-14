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
      <h3 className={styles.subtitle}>{subtitle}</h3>

      <div className={styles.container}>
        <article className={styles.article_item}>
          <img src={img} alt="profile_photo"></img>
        </article>

        <article className={styles.article_item}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.article_description}>{text}</p>

          <div className={styles.contacts_container}>
            {contacts
              ? contacts.map((contact) => {
                  return (
                    <p>
                      <strong>{contact.key}</strong>: {contact.value}
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
