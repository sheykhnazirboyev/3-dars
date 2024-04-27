import styles from "./Contact.module.css";

export const Contact = (props) => {
  return (
    <div className={styles.contact}>
      <p className={styles.info}>
        Phone: <span>{props.phone}</span>
      </p>
      <p className={styles.info}>
        Email: <span>{props.email}</span>
      </p>
    </div>
  );
};
