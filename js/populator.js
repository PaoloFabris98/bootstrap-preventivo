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
                <a class="nav-link" href="servizi.html">Servizi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contatti.html">Contatti</a>
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