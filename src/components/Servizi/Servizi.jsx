import styles from "./Servizi.module.css";
import { Link } from "react-router-dom";
import Glow from "../Glow/Glow";

function Servizi() {
    return (
        <div className={styles.container}>
            <Glow />
            
            <main className={styles.main}>
                <h1 className={styles.titolo}>SERVIZI</h1>

                <div className={styles.container_servizi}>
                    <div className={styles.servizio}>
                        <img className={styles.img} src="computer.svg" alt="immagine computer" />
                        <h2 className={styles.sotto_titolo}>RESPONSIVE</h2>
                        <p className={styles.descrizione}>I nostri siti sono progettati per essere adatatti su tutti i dispositivi, dal desktop al mobile</p>
                    </div>

                    <div className={styles.servizio}>
                        <img className={styles.img} src="react.svg" alt="logo react" />
                        <h2 className={styles.sotto_titolo}>DINAMICI</h2>
                        <p className={styles.descrizione}>siti web adatti per ogni esigenza con funzionalità di login, prenotazione e moltro altro</p>
                    </div>

                    <div className={styles.servizio}>
                        <img className={styles.img} src="ottimizzato.svg" alt="grafico di ottimizzazione" />
                        <h2 className={styles.sotto_titolo}>SEO GROWING</h2>
                        <p className={styles.descrizione}>Siti web ottimizzati per migliorare il posizionamento sui motori di ricerca</p>
                    </div>
                </div>

                <Link to="/" className={styles.link}>Home</Link>
            </main>
        </div>
    );
}

export default Servizi;