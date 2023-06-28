// negocio q faz o tempo funcionar (check)
function formatTimeRemaining(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  return `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Função para atualizar a contagem regressiva (chekeke)
function updateCountdown() {
  const countdownElements = document.querySelectorAll('.countdown');

  countdownElements.forEach((element) => {
    const endTime = new Date(element.dataset.endTime).getTime();
    const currentTime = new Date().getTime();
    const timeRemaining = endTime - currentTime;

    if (timeRemaining > 0) {
      element.textContent = '' + formatTimeRemaining(timeRemaining);
    } else {
      element.textContent = '';
    }
  });
}

// Atualiza a contagem regressiva a cada sec
setInterval(updateCountdown, 1000);

////////////////////////////////////////////ORDENAR POR ORDEM DE LAnÇAMENTO!////////////////////////////\





// Esperar 1 segundo e adicionar a classe 'hidden' ao parallax header
setTimeout(function() {
var parallaxHeader = document.querySelector('.parallax-header');
parallaxHeader.style.transition = 'opacity 0.5s ease-in-out, height 0.5s ease-in-out, padding 0.5s ease-in-out';
parallaxHeader.style.opacity = '0';
parallaxHeader.style.height = '0';
parallaxHeader.style.padding = '0';
parallaxHeader.style.overflow = 'hidden';
}, 1000);

window.addEventListener('load', function() {
// Obter a referência ao elemento do catálogo
const catalog = document.getElementById('catalog');

// Definir uma classe para exibir o catálogo
function showCatalog() {
  catalog.classList.add('show');
}

// Esperar 2 segundos antes de exibir o catálogo
setTimeout(showCatalog, 1000);
});


//////sistema que faz funcionar tudo a ordem baralaheu


function sortItemsByCountdown() {
  var itemsContainer = document.getElementById('catalog');
  var items = Array.from(itemsContainer.getElementsByClassName('item'));
  items.sort(compareCountdown);
  for (var i = 0; i < items.length; i++) {
    itemsContainer.appendChild(items[i]);
  }
}

function compareCountdown(a, b) {
  var countdownA = a.querySelector('.countdown');
  var countdownB = b.querySelector('.countdown');

  if (!countdownA || !countdownB) {
    // Se um dos elementos não tem a classe .countdown, retorna 0 para manter a ordem atual
    return compareAdditionalInfo(a, b);
  }

  var dateA = new Date(countdownA.dataset.endTime);
  var dateB = new Date(countdownB.dataset.endTime);

  if (dateA < dateB) {
    return -1;
  } else if (dateA > dateB) {
    return 1;
  } else {
    return compareAdditionalInfo(a, b);
  }
}

function compareAdditionalInfo(a, b) {
  var additionalInfoA = a.querySelector('.additional-info');
  var additionalInfoB = b.querySelector('.additional-info');

  if (!additionalInfoA || !additionalInfoB) {
    return 0;
  }

  var dateA = parseDateFromAdditionalInfo(additionalInfoA);
  var dateB = parseDateFromAdditionalInfo(additionalInfoB);

  if (dateA < dateB) {
    return -1;
  } else if (dateA > dateB) {
    return 1;
  } else {
    return 0;
  }
}

function parseDateFromAdditionalInfo(additionalInfo) {
  var dateString = additionalInfo.querySelector('h4').textContent;
  var dateParts = dateString.split(': ')[1].split('/');
  var day = parseInt(dateParts[0]);
  var month = parseInt(dateParts[1]) - 1;
  var year = new Date().getFullYear(); // Assume o ano atual, você pode ajustar se necessário
  return new Date(year, month, day);
}



// Chama a função sortItemsByCountdown() quando a página é carregada
window.addEventListener('DOMContentLoaded', function() {
  dummyCountdown();
  sortItemsByCountdown();
});

function dummyCountdown() {
  var countdowns = document.getElementsByClassName('countdown');
  for (var i = 0; i < countdowns.length; i++) {
    var endTime = countdowns[i].dataset.endTime;
    countdowns[i].textContent = calculateCountdown(endTime);
  }
}

function calculateCountdown(endTime) {
  var currentDate = new Date();
  var endDate = new Date(endTime);
  var timeRemaining = endDate - currentDate;

  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}
