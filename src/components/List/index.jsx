import styles from "./styles.module.css";

function List({ imgSrc, title, list = [] }) {
  return (
    <article className={styles.list_container}>
      <div className={styles.img_container}>
        <img src={imgSrc} alt="icon" />
      </div>

      <h4>{title}</h4>

      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </article>
  );
}

export default List;
