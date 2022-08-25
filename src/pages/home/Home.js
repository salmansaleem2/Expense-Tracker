import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

import styles from "./Home.module.css";

// components
import TransactionForm from "./TransactionForm";

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("transactions");

  return (
    <div className={styles.container}>
      <div>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
