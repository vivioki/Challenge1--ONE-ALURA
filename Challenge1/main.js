function encriptarTexto() {
  var text = document.getElementById("encriptarTextarea").value;

  console.log(text.length);

  if (text.length > 0) {
    document.getElementById("articleMonoTexto").style.display = "none";

    document.getElementById("textoEncriptado").style.display = "block";

    document.getElementById("botonCopiar").style.display = "inline-block";

    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");

    document.getElementById("textoEncriptado").innerHTML = text;
    document
      .getElementById("botonCopiar")
      .addEventListener("click", copiarTexto(text));
  }
}

function copiarTexto(text) {
  navigator.clipboard.writeText(text);
}

//Desencriptar
function desencriptarTexto() {
  var text = document.getElementById("encriptarTextarea").value;

  console.log(text.length);

  if (text.length > 0) {
    document.getElementById("articleMonoTexto").style.display = "none";

    document.getElementById("textoEncriptado").style.display = "block";

    document.getElementById("botonCopiar").style.display = "inline-block";

    // Aca se desencripta el texto
    console.log("Hay contenido");
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");

    document.getElementById("textoEncriptado").innerHTML = text;
    document
      .getElementById("botonCopiar")
      .addEventListener("click", copiarTexto(text));
  }
}
