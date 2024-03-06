//evento de clic en el boton "decir"
document.getElementById("hablar").addEventListener("clik",() =>{
    decir(document.getElementById("texto").value);

});
function decir(texto) {
    const utterance = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(utterance);
    texto.pitch = 2;
    texto.voices[7];
    
}