import React from "react";

const Header = () => (
  <header>
    <nav class="navbar navbar-light navbar-expand-lg bg-info">
      <a class="navbar-brand" href="#">
        Liste des exigences
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav"
        aria-controls="nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Accueil <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
