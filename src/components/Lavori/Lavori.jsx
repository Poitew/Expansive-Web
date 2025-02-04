import { Link } from "react-router-dom";
import styles from "./Lavori.module.css";
import Glow from "../Glow/Glow";
function Lavori() {
    return (
        <main className={styles.main}>
            <Glow></Glow>
            <h1 className={styles.h1}>Per chi abbiano lavorato</h1>
            <a target="_blank" href="https://www.lacoluccieventi.it/" className={styles.sito_cliente}>
                <div className={styles.content_cliente}>
                    <h2 className={styles.titolo_cliente}>La Colucci eventi</h2>
                    <p className={styles.descrizione_cliente}>Sito web per promoter di eventi; munito di sistema di prenotazione e pagina admin per visualizzazione delle prenotazioni.</p>
                </div>
            </a>
            <Link className={styles.link} to="/">Home</Link>
        </main>
    );
}

export default Lavori;