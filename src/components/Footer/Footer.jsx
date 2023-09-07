import styles from "./Footer.module.css";
const Footer = ({ ttip, output }) => {
  console.log(ttip);

  return (
    <>
      <div>
        <table className={styles.border} id={styles.size}>
          <thead>
            <tr className={styles.border}>
              <th className={styles.border}>Total Costumer</th>
              <th className={styles.border}>Tip</th>
            </tr>
            <tr className={styles.border}>
              <td className={styles.border}>{output}</td>
              <td className={styles.border}>{ttip}</td>
            </tr>
          </thead>
        </table>
        <h3 className={styles.copyRight}>© 2020 TIP CALCULATOR BY DEEPANSHU</h3>
      </div>
    </>
  );
};
export default Footer;
