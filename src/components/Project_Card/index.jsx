import styles from "./styles.module.css";

function Project_Card({ imgSrc, title, link, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.card_img_container}>
        <img src={imgSrc} alt="project_background" />
      </div>

      <a className={styles.card_link} href={link} target="_blank">
        {title}
      </a>

      <p className={styles.card_description}>{description}</p>
    </article>
  );
}

export default Project_Card;
