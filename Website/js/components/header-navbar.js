export default class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav>
                <ul>
                    <li>
                        <a href="index.html"><img class="logo" src="../imgs/logo.svg" alt="logo"></a>
                    </li>
                    <li class="nav-page-link">
                        <a href="photography.html">Fotografie</a>
                    </li>
                    <li class="nav-page-link">
                        <a href="services.html"><s>Služby</s></a>
                    </li>
                    <li class="nav-page-link">
                        <a href="contact.html">Kontakt</a>
                    </li>
                    <li class="nav-page-link">
                        <a href="about.html">O mně</a>
                    </li>
                </ul>
            </nav>
        `;
  }
}
