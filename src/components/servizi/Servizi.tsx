import styles from'./Servizi.module.css';

function Servizi(){
    return(
        <main>
            <h2>I nostri servizi</h2>
            <p>
                Offriamo servizi per portare il tuo business online attraverso tecniche sicure e corrette, orientate
                al posizionamento e alle performance; tra cui:
            </p>
            <ul className={styles.list} >
                <li className={styles.element}>Web Design</li>
                <li className={styles.element}>Web Development</li>
                <li className={styles.element}>Seo Growing</li>
                <li>Consulenza hosting e dominio</li>
            </ul>
            <p>
                Le nostre pagine web sono progettate per essere adatatte su tutti i dispositivi, dal desktop al mobile,
                per garantire una navigazione ottimale e una user experience di qualità.
                I siti possono includere funzionalità di login, prenotazione, blog, e moltro altro, rendendoci un gruppo
                versatile per ogni esigenza, e per ogni cliente.
            </p>
        </main>
    )
}

export default Servizi;