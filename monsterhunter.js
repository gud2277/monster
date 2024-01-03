const monstruos = [];
const url = "./monsters.json";
const container = document.getElementById("container");

function cargarMonstruos(monstruos){
  imprimir = ""
  monstruos.forEach(monstruo => {
    imprimir += cartaMonstruo(monstruo);
  });
  container.innerHTML = imprimir;
}

function cartaMonstruo(monstruo){
  carta =  `<div class="card mb-3" style="max-width: 540px;">
     <div class="row g-0">
    <div class="col-md-4">
      <img src="`+monstruo.imagen+`" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">`+monstruo.nombre+`</h5>
        <p class="card-text">Estado: `+monstruo.tipo+` </p>
        <p class="card-text">Especie: `+monstruo.elemento+`</p>
        <p class="card-text">Genero: `+monstruo.debilidad+`</p>
      </div>
    </div>
  </div>
  </div>`;

  return(carta);
}

function obtenerMonsters(){
  fetch(url)
  .then(res => res.json())
  .then(data => monstruos.push(data))
  .then(() => cargarMonstruos(monstruos[0]))
};

obtenerMonsters();