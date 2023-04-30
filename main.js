function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); /* Acessando todas as teclas */

let contador = 0;  /* Vairável */

// para
for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;  //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}
