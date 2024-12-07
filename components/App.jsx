import styles from '../css/app.module.css';

const App = () => {
    return (
    <div className={styles.app}>
        <div className={styles.card}>
            <img src="../assets/images/avatar-jessica.jpeg" alt="Jessica Randall" />
            <h1>Jessica Randall</h1>
            <h2>London, United Kingdom</h2>
            <p>"Front-end developer and avid reader."</p>
            <button>GitHub</button>
            <button>Frontend Mentor</button>
            <button>LinkedIn</button>
            <button>Twitter</button>
            <button>Instagram</button>
        </div>
    </div>
    );
}

export default App;