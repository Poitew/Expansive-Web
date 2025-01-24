import styles from "./Descrizione.module.css";

function Descrizione() {
    return (
        <main className={styles.main}>
            <div className={styles.descrizioni}>
                <h2>Expansive Web</h2>
                <p className={styles.descrizione}>
                    <strong>Expansive Web</strong> è un gruppo che sviluppa software per trasformare idee in realtà. <br />
                    La <strong>soddisfazione del cliente</strong> è la nostra priorità, questo è possibile grazie a un team di 
                    giovani appassionati dell'<strong>informatica</strong>. I nostri prodotti sono <strong> responsivi, scalabili </strong> e mirati a soddisfare il cliente.
                </p>

                <h2>Perchè scegliere noi?</h2>
                <p className={styles.descrizione}>
                    Perchè scegliere noi di <strong>Expansive Web</strong>? Il nostro gruppo è rapido e efficiente, 
                    rispettiamo sempre il cliente e i suoi bisogni, stando completamente disponibili ad ogni esigenza. <br/>
                    <strong>Expansive web</strong> mira ad evolvere lo standard industriale usando solo le tecnologie più recenti, testate, affidabili
                    e performanti.
                </p>
            </div>
        </main>
    );
}

export default Descrizione;