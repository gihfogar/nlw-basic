// create map
const map = L.map("mapid").setView([38.7697961, -9.3090047], 17);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// creat icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// creat and add marker //
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon //
  marker && map.removeLayer(marker);

  // add icon layer//
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo//
function addPhotoField() {
  // container photos #images//
  const container = document.querySelector("#images");

  // container para duplicar .new-image//
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realizar o clone da ultima imagem add //
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se o campo está vazio, e se sim, adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  // add clone to container #images //
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo
  span.parentNode.remove();
}

// seleção do botão sim e não
function toggleSelect(event) {
  // retirar a classe .active dos botões
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  // colocar a classe .active nesse botao clicados
  const button = event.currentTarget;
  button.classList.add("active");

  //atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}

function validate(event) {
  const lat = document.querySelector("[name=lat]");
  const lng = document.querySelector("[name=lng]");

  //validar se lat e lng estão preenchidos
  if (lat.value == "" && lng.value == "") {
    event.preventDefault();
    alert("Selecione um ponto no mapa!");
  }
}
