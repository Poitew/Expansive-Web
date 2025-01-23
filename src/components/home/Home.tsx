import styles from './Home.module.css';

function Home(){
    return (
        <main className={styles.home} >
            <div className={styles.info_container} >
                <img src="/logo_ew.svg" alt="logo" className={styles.title} />
                <p className={styles.description} >Esperti nello sviluppo di software</p>
            </div>
        </main>
    );
}

export default Home;