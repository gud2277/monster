var contenedor = document.getElementById("container");

fetch('https://rickandmortyapi.com/api/character/?page=1')
.then(response => response.json())
.then (data => { 
    var lista_personajes = [];
    data.results.forEach(persona => {
        lista_personajes.push(
            `<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="`+persona.image+`" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">`+persona.name+`</h5>
                  <p class="card-text">Estado: `+persona.status+` </p>
                  <p class="card-text">Especie: `+persona.species+`</p>
                  <p class="card-text">Genero: `+persona.gender+`</p>
                </div>
              </div>
            </div>
            </div>`

            
        )
    });
    contenedor.innerHTML = lista_personajes.join("")
})