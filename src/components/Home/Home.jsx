import styles from "./Home.module.css";

function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container_illuminato}></div>
            <div className={styles.container_titoli}>
                <h1 className={styles.h1}>Expansive Web</h1>
                <h2 className={styles.h2}>Esperti nello sviluppo software</h2>
            </div>
            <p className={styles.descrizione}>
                <strong>Expansive Web</strong> è un gruppo che sviluppa software per trasformare idee in realtà. <br />
                La <strong>soddisfazione del cliente</strong> è la nostra priorità, questo è possibile grazie a un team di <br />
                giovani appassionati dell'<strong>informatica</strong>. I nostri prodotti sono <strong> responsivi, scalabili </strong> e mirati a soddisfare il cliente. <br />
            </p>
            <div className={styles.statistiche_container}>
                <section className={styles.sezione}>
                    <h3 className={styles.numero}>3+</h3>
                    <p className={styles.descrizione_numero}>Anni di esperienza nel campo</p>
                </section>
                <section className={styles.sezione}>
                    <h3 className={styles.numero}>15+</h3>
                    <p className={styles.descrizione_numero}>Numeri di siti costruiti e pubblicati</p>
                </section>
            </div>
            <div className={styles.container_bottoni}>
                <button className={styles.bottone_servizi}>Servizi</button>
                <button className={styles.bottone_lavori}>Lavori</button>
            </div>
        </main>
    );
}

export default Home;