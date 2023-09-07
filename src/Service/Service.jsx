import styles from "./Service.module.css";

const Service = ({
  changeHandler,
  changeHandler2,
  buttonClickHandler,
  value,
  value1,
  isDisabled,
  clearCostumerHandler,
}) => {
  return (
    <>
      <div className={styles.service}>
        <label>How was the service</label>
        <select required onChange={changeHandler2} value={value1}>
          <option defaultValue="choose">Choose...</option>;
          <option value="excellent">Excellent - 20%</option>;
          <option value="medium">Moderate - 10%</option>
          <option value="notGood">Bad - 5%</option>
        </select>
        <input
          type="text"
          placeholder="Costumer Name"
          onChange={changeHandler}
          value={value}
        />
        <button
          className={styles.button}
          onClick={buttonClickHandler}
          disabled={isDisabled}
          value={value}
        >
          Add Costumer{" "}
        </button>
      </div>
      <button onClick={clearCostumerHandler}>Clear Costumer List</button>
    </>
  );
};
export default Service;
