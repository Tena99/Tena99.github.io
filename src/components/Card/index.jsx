import styles from "./styles.module.css";

function Card({ imgSrc, title, link }) {
  return (
    <article className={styles.card}>
      <div className={styles.card_img_container}>
        <img src={imgSrc} alt="project_background" />
      </div>

      <hr className={styles.card_line} />

      <a className={styles.card_link} href={link} target="_blank">
        <span>{title}</span>
        <img src="./arrow-right.svg" alt="" />
      </a>
    </article>
  );
}

export default Card;
