

document.addEventListener('DOMContentLoaded', function () {
    var elementosTextoCard = document.querySelectorAll('.limiteTexto');
    var limiteCaracteres = 90;

    elementosTextoCard.forEach(function (elemento) {
        // Remover espaços no início e no final do texto
        var texto = elemento.textContent.trim();

        if (texto.length > limiteCaracteres) {
            elemento.textContent = texto.substring(0, limiteCaracteres - 3) + '...';
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const modal = new bootstrap.Modal(document.getElementById('estruturaModal'));

      function openModal(title, imageSrc, content, telefone, endereco) {
      const modalTitle = document.getElementById('estruturaModalLabel');
      const modalImage = document.getElementById('modalImage');
      const modalContent = document.getElementById('modalContent');
      const modalTelefone = document.getElementById('modalTelefone');
      const modalEndereco = document.getElementById('modalEndereco');

      modalTitle.textContent = title;
      modalImage.src = imageSrc;
      modalContent.innerHTML = content;
      modalTelefone.textContent = 'Contato: ' + telefone;
      modalEndereco.textContent = 'Endereço: ' + endereco;

      modal.show();
    }

    const continueButtons = document.querySelectorAll('.estrutura .btn');
    continueButtons.forEach(button => {
      button.addEventListener('click', function () {
        const card = this.closest('.card');
        const cardTitle = card.querySelector('.estruturaCardTitulo').textContent;
        const cardImageSrc = card.querySelector('.card-img-top').src;
        const cardContent = card.querySelector('.limiteTexto').innerHTML;
        const cardTelefone = card.getAttribute('data-telefone'); 
        const cardEndereco = card.getAttribute('data-endereco');
        const cardFullText = card.querySelector('.limiteTexto').getAttribute('data-fullText'); 

        openModal(cardTitle, cardImageSrc, cardFullText, cardTelefone, cardEndereco);
      });
    });
  });



  const setup = (function() {
    // console.log('setup');
    document.getElementById('sendMessage').onsubmit = function(e) {
        e.preventDefault();
        console.log('click');
        const meuNumero = '554688139272';
        const nome_responsavel = (document.getElementById('nome_responsavel').value)
        const cargo = (document.getElementById('cargo_empresa').value)
        const empresa = (document.getElementById('nome_empresa').value)
        const cnpj = (document.getElementById('cnpj_empresa').value)
        const email = (document.getElementById('email_responsavel').value)
        const number = (document.getElementById('telefone_responsavel').value || '')
            .replace(/\D/g, '')
        // .replace(new RegExp(^${country}), '');

        const text = 'Olá, desejo cadastrar minha empresa. Meu nome é *' + nome_responsavel + '* - Email: *' + email + '* - CNPJ: *' + cnpj + '* Empresa: *' + empresa + '* Cargo: *' + cargo + '*';
        if (!number) {
            alert('Invalid number');
            return;
        }
        // const link = https://wa.me/${country}${number}?text=${text};
        link = `https://web.whatsapp.com/send?phone=${meuNumero}&text=${text}`;

        console.log(number, link);
        window.open(link);
    };
})
if (window.attachEvent) {
    window.attachEvent('onload', setup);
} else {
    window.addEventListener('load', setup, false);
}