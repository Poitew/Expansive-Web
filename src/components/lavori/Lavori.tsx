import styles from './Lavori.module.css';
import lavori from '/src/data/lavori.json';

function Lavori(){
    const lavori_data: any = lavori;

    return (
        <main className={styles.main}>
            <h2>Per chi abbiamo lavorato...</h2>

            <section className={styles.flex}>
                {lavori_data.map((element: any, index: number) => (
                    <Lavoro 
                        key={index} 
                        path={element.path}
                        titolo={element.titolo}
                        descrizione={element.descrizione} 
                    />
                ))}
            </section>
        </main>
    );
}

interface LavoroProps{
    path: string;
    titolo: string;
    descrizione: string;
}

function Lavoro(props: LavoroProps){
    return (
        <article className={styles.lavoro}>
            <a href={props.path} target="_blank" rel="noreferrer">
                <h3 className={styles.titolo} >{props.titolo}</h3>
                <p>{props.descrizione}</p>
            </a>
        </article>
    );
}

export default Lavori;