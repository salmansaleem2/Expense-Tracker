// styles
import styles from "./Home.module.css";

const TransactionList = ({ transactions }) => {
  return <ul className={styles.transactions}> {transactions}</ul>;
};

export default TransactionList;
