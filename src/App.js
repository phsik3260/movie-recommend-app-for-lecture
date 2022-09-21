import Button from "./Button";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <h1 className={styles.title}>hello world</h1>
      <Button text={"Continue"} />
    </>
  );
};

export default App;
