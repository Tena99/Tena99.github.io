import styles from "./styles.module.css";

function Skills_Card({ imgSrc, title, list }) {
  return (
    <article className={styles.card}>
      <div className={styles.card_img_container}>
        <img src={imgSrc} alt="background_image" />
      </div>
    </article>
  );
}

export default Skills_Card;
