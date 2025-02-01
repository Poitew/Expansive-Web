import Home from "./components/Home/Home.jsx";
import Servizi from "./components/Servizi/Servizi.jsx";
import { useEffect } from "react";
import styles from "./App.module.css";

function App() {
    useEffect(() => {
        // Otteniamo il contesto del canvas
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');
            
        // Impostazioni canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
            
        // Parametri delle particelle
        const NUM_ROWS = 20; // Numero di righe nella griglia
        const NUM_COLS = 20; // Numero di colonne nella griglia
        const COLOR = '#a5d8ff'; // Colore delle particelle
        const MAX_SIZE = 5; // Dimensione massima della particella
        const MIN_SIZE = 1; // Dimensione minima della particella
        const MAX_SPEED = 1; // Velocità massima di movimento
            
        // Classe per la particella
        class Particle {
          constructor(x, y, depth) {
            this.x = x; // Posizione X (dalla griglia)
            this.y = y; // Posizione Y (inizia dal basso)
            this.depth = depth; // La profondità della particella
            this.size = this.getSize(); // Dimensione iniziale in base alla profondità
            this.speed = this.getSpeed(); // Velocità in base alla profondità
          }
      
          // Calcoliamo la dimensione in base alla profondità
          getSize() {
            return Math.max(MAX_SIZE - this.depth / 10, MIN_SIZE);
          }
      
          // Calcoliamo la velocità in base alla profondità
          getSpeed() {
            return Math.max(MAX_SPEED - this.depth / 100, 0.1);
          }
      
          // Disegniamo la particella
          draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = COLOR;
            ctx.fill();
          }
      
          // Aggiorniamo la posizione della particella (muoviamo verso l'alto)
          update() {
            this.y -= this.speed; // Muove la particella verso l'alto
            this.size = this.getSize(); // Aggiorniamo la dimensione in base alla profondità
            if (this.y < 0) {
              // Se la particella esce dallo schermo, la rimettiamo in basso
              this.y = canvas.height;
              this.depth = Math.random() * 500; // Riproponiamo una nuova profondità
            }
        
            this.draw();
          }
        }
        
        // Array per contenere tutte le particelle
        const particles = [];
        
        // Funzione per generare particelle in una griglia con profondità
        function createParticles() {
          const gapX = canvas.width / NUM_COLS; // Distanza tra le particelle in orizzontale
          const gapY = canvas.height / NUM_ROWS; // Distanza tra le particelle in verticale
        
          for (let row = 0; row < NUM_ROWS; row++) {
            for (let col = 0; col < NUM_COLS; col++) {
              const x = col * gapX + gapX / 2; // Posizione X della particella (al centro della colonna)
              const y = row * gapY + gapY / 2; // Posizione Y della particella (al centro della riga)
              const depth = Math.random() * 500; // Profondità casuale per ogni particella
              particles.push(new Particle(x, y, depth));
            }
          }
        }
        
        // Funzione per animare le particelle
        function animateParticles() {
          // Cancella il canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        
          // Aggiorna e disegna ogni particella
          particles.forEach(particle => {
            particle.update();
          });
      
          // Richiama l'animazione in un loop
          requestAnimationFrame(animateParticles);
        }
        
        // Inizializziamo le particelle
        createParticles();
        
        // Avvia l'animazione
        animateParticles();
    }, [])

    return (
        <>
          <canvas id="particleCanvas" className={styles.canvas}></canvas>
          <Home></Home>
          <Servizi></Servizi>
        </>
    );
}

export default App;