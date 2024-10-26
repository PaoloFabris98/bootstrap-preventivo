import * as obj from "./obj.js"

export function navBar() {
  const head = document.getElementById("navB");
  head.innerHTML += `<div class="container ps-3">
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <div class="navbar-brand">
            <a class="nav-link active" aria-current="page" href="index.html">Bool Factory</a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Servizi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contatti</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>`;
}

export function error(field) {
  field.classList.remove("d-none");
}
export function removeAlert(field) {
  field.classList.add("d-none");
}

export function jobSelectPopulator(itteration){
  const jobSelector = document.getElementById("jobSelect");
  for(let i = 1; i <= itteration;i++){
    jobSelector.innerHTML += `
      <option value="${i}">${obj.jobCost[i-1].name} - paga oraria: ${obj.jobCost[i-1].paga}€</option>
    `
  }
}