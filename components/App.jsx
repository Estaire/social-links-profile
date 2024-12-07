import styles from "../css/app.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <img src="../assets/images/avatar-jessica.jpeg" alt="Jessica Randall" />
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
        <p>"Front-end developer and avid reader."</p>
        <ul>
          <li>
            <a href="https://github.com" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.frontendmentor.io" target="_blank">
              Frontend Mentor
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
