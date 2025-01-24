import styles from './Home.module.css';

function Home(){
    return (
        <main>
            <div className={styles.info_container} >
                <div className={styles.logo}>
                    <img src="/logo_ew.svg" alt="logo" className={styles.titolo} />
                    <p className={styles.description} >Esperti nello sviluppo di software</p>
                </div>

                <div className={styles.statistiche_container}>
                    <section className={styles.sezione}>
                        <h3 className={styles.numero}>3+</h3>
                        <p className={styles.descrizione_numero}>Anni di esperienza nel campo di sviluppo software</p>
                    </section>

                    <section className={styles.sezione}>
                        <h3 className={styles.numero}>15+</h3>
                        <p className={styles.descrizione_numero}>Numeri di siti costruiti e pubblicati</p>
                    </section>
                </div>
                <img className={styles.freccia} src="icons/freccia_2.svg" alt="freccia verso il basso" />
            </div>
        </main>
    );
}

export default Home;