import styles from "./Canvas.module.css";
import { useEffect } from "react";

function Canvas() {
  useEffect(() => {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
  
    // Funzione per ridimensionare il canvas dinamicamente
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  
    // Impostiamo la dimensione iniziale del canvas
    resizeCanvas();
  
    // Aggiungiamo l'event listener per ridimensionare il canvas quando la finestra cambia
    window.addEventListener('resize', resizeCanvas);
  
    // Funzione per determinare se è un dispositivo mobile
    const isMobile = window.innerWidth <= 768;
  
    // Parametri delle particelle
    const NUM_ROWS = 20; // Numero di righe nella griglia
    const NUM_COLS = isMobile ? 8 : 15; // Ridurre il numero di colonne su dispositivi mobili
    const COLOR = '#a5d8ff'; // Colore delle particelle
    const MAX_SIZE = isMobile ? 2 : 5; // Dimensione massima delle particelle (più piccole su mobile)
    const MIN_SIZE = isMobile ? 0.5 : 0.75; // Dimensione minima delle particelle (più piccole su mobile)
    const MAX_SPEED = isMobile ? 0.5 : 1; // Velocità massima di movimento (più lenta su mobile)
    const GAP_X = isMobile ? canvas.width / NUM_COLS * 1.5 : canvas.width / NUM_COLS; // Aumenta la distanza tra le particelle su dispositivi mobili
    const GAP_Y = isMobile ? canvas.height / NUM_ROWS * 1.5 : canvas.height / NUM_ROWS; // Aumenta la distanza tra le particelle su dispositivi mobili
  
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
      for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
          const x = col * GAP_X + GAP_X / 2; // Posizione X della particella (al centro della colonna)
          const y = row * GAP_Y + GAP_Y / 2; // Posizione Y della particella (al centro della riga)
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
  
    // Puliamo quando il componente viene smontato
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);    

  return (
    <canvas id="particleCanvas" className={styles.canvas}></canvas>
  );
}

export default Canvas;