import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.heading}>
        <h2 className={styles.headColor}>Tip Calculator</h2>
        <h3 className={styles.headColor}>Build in React</h3>
      </div>

      <h4 className={styles.smallHead}>Enter your bill amount:</h4>
    </>
  );
};
export default Header;
