/* Tentativa de implantar a barra de navegação/menu mobile de responsividade, mas não consegui! */
$( document ).ready(function() {

    var btnMenuMobile = $('.btn-menumobile');

    $(btnMenuMobile).on('click', function() {

        $('.nav-container ul').toggleClass('open');
    });
});

/* Código para abrir links em um pop-up no centro da página */
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}

/* POP-UP */

function iniciaModal(modalID) {
	if(localStorage.fechaModal !== modalID) {
	const modal = document.getElementById(modalID);
	if(modal) {
		modal.classList.add('mostrar');
		modal.addEventListener('click', (e) => {
			if(e.target.id == modalID || e.target.className == 'fechar') {
			modal.classList.remove('mostrar');
			localStorage.fechaModal = modalID;
			}
		});
	}
 }
}

document.addEventListener('scroll', () => {
	if(window.pageYOffset > 800) {
		iniciaModal("modal-promocao")
	}
})






