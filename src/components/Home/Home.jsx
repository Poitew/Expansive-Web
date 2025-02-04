import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Glow from "../Glow/Glow";
import styles from "./Home.module.css";

function Home() {
    return (
        <main className={styles.container}>
            <Glow />
            <Main />
            <ScegliereNoi/>
            <Footer />
        </main>
    );
}

function Main() {
    const scrollToSection = () => {
        const section = document.getElementById("scegliere_noi");
        section.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <main className={styles.main}>
            <div className={styles.container_titoli}>
                <h1 className={styles.titolo}>Expansive Web</h1>
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
            
            <button onClick={scrollToSection} className={styles.freccia} href="#scegliere_noi"><img src="/arrow_down.svg" alt="Arrow pointing down" /></button>
        </main>
    );
}

function ScegliereNoi() {
    return(
        <div className={styles.scegliere_noi} id="scegliere_noi">
            <h2 className={styles.titolo}>Perché scegliere noi</h2>

            <p className={styles.descrizione}>
                Perchè scegliere noi di <strong>Expansive Web</strong>? Il nostro gruppo è rapido e efficiente, 
                rispettiamo sempre il cliente e i suoi bisogni, stando completamente disponibili ad ogni esigenza. <br/>
                <strong>Expansive web</strong> mira ad evolvere lo standard industriale usando solo le tecnologie più recenti, testate, affidabili
                e performanti.
            </p>

            <div className={styles.container_link}>
                <Link to="/servizi" className={styles.link}>Servizi</Link>
                <Link to="/lavori"  className={styles.link}>Lavori</Link>
            </div>
        </div>
    );
}

function Footer() {
    const [ mostraFooter, setMostraFooter ] = useState(false);

    const footer = useRef(null);
    const freccia = useRef(null);

    function cambiaStato(){
        setMostraFooter(!mostraFooter);

        if(!mostraFooter){
            footer.current.style.transform = "translateY(0)";
            freccia.current.style.transform = "rotate(180deg)";
        }
        else {
            footer.current.style.transform = "translateY(100%)";
            freccia.current.style.transform = "rotate(0deg)";
        }
    }

    return (
        <div className={styles.footer_container}>
            <img className={styles.freccia_no_animazione} src="/arrow_up.svg" alt="Arrow pointing down" onClick={cambiaStato} ref={freccia} />
            
            <footer className={styles.footer} ref={footer}>

                <section className={styles.sezione_azienda}>
                    <h3 className={styles.footer_h3}>Expansive Web:</h3>
                    <div className={styles.container_posizione}>
                        <img className={styles.footer_immagine} src="posizione.svg" alt="logo posizione" />
                        <p>Situata a Napoli</p>
                    </div>
                </section>

                <section className={styles.sezione_servizi}>
                    <h3 className={styles.footer_h3}>Servizi:</h3>
                    <ul>
                        <li>Sviluppo Web</li>
                        <li>SEO Growing</li>
                        <li>Consulenza Hosting e Domini</li>
                    </ul>
                </section>

            </footer>
        </div>
    );
}

export default Home;