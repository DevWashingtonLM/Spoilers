
document.write(`
    <script>
    const audio = document.getElementById("meuAudio");
    const muteBtn = document.getElementById("muteBtn");
  
  
    audio.volume = 0.05;
  
    muteBtn.addEventListener("click", () => {
        audio.muted = !audio.muted;
        muteBtn.textContent = audio.muted ? "🔇 Desmutar" : "🔊 Mutar";
    });
    </script>
    
    <footer class="bg-dark text-white text-center p-3 mt-4 copy">
        &copy; 2025 Otaku Em Minutos. Todos os spoilers reservados.
    </footer>
</body>
</html>
`);