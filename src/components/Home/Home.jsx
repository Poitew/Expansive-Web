import styles from "./Home.module.css";
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
        <div className={styles.container_illuminato}></div>
            <main className={styles.main}>
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
                    <Link to="/servizi" className={styles.bottone}>Servizi</Link>
                    <Link to="/lavori"  className={styles.bottone}>Lavori</Link>
                </div>
                <div className={styles.scegliere_noi}>
                    <h2 className={styles.scegliere_noi_h2}>Perche' scegliere noi</h2>
                    <p className={styles.descrizione}>
                        Perchè scegliere noi di <strong>Expansive Web</strong>? Il nostro gruppo è rapido e efficiente, 
                        rispettiamo sempre il cliente e i suoi bisogni, stando completamente disponibili ad ogni esigenza. <br/>
                        <strong>Expansive web</strong> mira ad evolvere lo standard industriale usando solo le tecnologie più recenti, testate, affidabili
                        e performanti.
                    </p>
                    <div className={styles.container_bottoni}>
                        <Link to="/servizi" className={styles.bottone}>Servizi</Link>
                        <Link Link to="/lavori"  className={styles.bottone}>Lavori</Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;