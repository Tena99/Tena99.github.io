import styles from "./styles.module.css";

function List({ imgSrc, title, list = [] }) {
  return (
    <article className={styles.list_container}>
      <div className={styles.list_title}>
        <div className={styles.img_container}>
          <img src={imgSrc} alt="icon" />
        </div>

        <h4>{title}</h4>
      </div>

      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <img src={item.img} alt="logo" /> <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default List;
