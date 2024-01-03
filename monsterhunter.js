var contenedor = document.getElementById("container");
const url='./monsters.json';
console.log (url)
fetch(url)
.then(response => response.json())
.then (data => {
    console.log(data.results) 
    var lista_monster = [];
    data.results.forEach(monster => {
        lista_monster.push(
            `<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="`+monster.imagen+`" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">`+monster.nombre+`</h5>
                  <p class="card-text">Estado: `+monster.tipo+` </p>
                  <p class="card-text">Especie: `+monster.elemento+`</p>
                  <p class="card-text">Genero: `+monster.debilidad+`</p>
                </div>
              </div>
            </div>
            </div>`

            
        )
    });
    contenedor.innerHTML = lista_monster.join("")
})