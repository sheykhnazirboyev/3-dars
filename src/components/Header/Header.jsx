import styles from "./Header.module.css";

export const Header = () => {
    return (
        <div className={styles.header} >
            <p className={styles.p} >This is a header component</p>
        </div>
    )
}