setTimeout(ApresentarModal, 5000);
function ApresentarModal() {
    var modal = document.querySelector(".modal");

    if (modal != null) {
        document.querySelector(".modal").style.display = "block";
        document.querySelector(".modal a").
            addEventListener("click", function () { document.querySelector(".modal").style.display = "none"; return false });
    }
}

if (document.forms["modal_form"] != undefined) {
    var form = document.forms["modal_form"];
    form.addEventListener("submit", validarFormModal);
}

function validarFormModal(evt) {
    var form = document.forms["modal_form"];

    var inputEmail = form.email;
    var valorEmail = form.email.value;

    var posicaoArroba = valorEmail.indexOf("@");

    if (
        valorEmail != "" &&
        valorEmail.indexOf("@") > 3 &&
        valorEmail.lastIndexOf(".") > posicaoArroba
    ) {
        alert("E-mail válido");
    } else {
        alert("E-mail inválido");
        evt.preventDefault();
    }
}