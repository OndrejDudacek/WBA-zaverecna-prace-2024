export default class FooterNavLinks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav>
            <ul>
                <li>
                    <a href="index.html"><img class="logo" src="../imgs/logo.svg" alt="logo"></a>
                </li>
                <li>
                    <a href="index.html">
                        <h3>Ondřej Dudáček</h3>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="photography.html">
                        <h3>Fotografie</h3>
                    </a>
                </li>
                <li>
                    <a href="photography.html#portraits">Portréty</a>
                </li>
                <li>
                    <a href="photography.html#film">Film 35mm</a>
                </li>
                <li>
                    <a href="photography.html#products">Produkty a marketing</a>
                </li>
                <li>
                    <a href="photography.html#street">Street</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="services.html">
                        <h3><s>Služby</s></h3>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="contact.html">
                        <h3>Kontakt</h3>
                    </a>
                </li>
                <li>
                    <a href="contact.html#form">Kontaktní formulář</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="about.html">
                        <h3>O mně</h3>
                    </a>
                </li>
                <li>
                    <a href="about.html#about">Kdo jsem</a>
                </li>
                <li>
                    <a href="about.html#gear">Technika</a>
                </li>
                <li>
                    <a href="about.html#motivation">Motivace</a>
                </li>
                <li>
                    <a href="about.html#cv">Životopis</a>
                </li>
            </ul>
        </nav>
        <hr>
        <section class="socials">
            <nav>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/ondra_dudaceeek/"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/OndrejDudacek"><i class="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ond%C5%99ej-dud%C3%A1%C4%8Dek-00a430299/"><i
                                class="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="mailto:ondrej.dudacek@gmail.com"><i class="fas fa-envelope"></i></a>
                    </li>
                </ul>
            </nav>
            <p>@ Ondřej Dudáček 2024</p>
        </section>
        `;
  }
}
