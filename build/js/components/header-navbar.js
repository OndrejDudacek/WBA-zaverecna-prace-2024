export default class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav>
                <ul>
                    <li>
                        <a href="index.html" aria-label="Vraťte se na hlavní stránku."><img class="logo" src="../imgs/logo.svg" alt="logo"></a>
                    </li>
                    <li>
                        <ul class="text-page-links">
                            <li>
                                <a href="photography.html" aria-label="Podívejte se na galerii mých nejlepších fotografií.">Fotografie</a>
                            </li>
                            <li>
                                <a href="" aria-label="Přečtěte si informace o službách, které poskytuji."><s>Služby</s></a>
                            </li>
                            <li>
                                <a href="contact.html" aria-label="Podívejte se na možnosti, jak mě kontaktovat.">Kontakt</a>
                            </li>
                            <li>
                                <a href="about.html" aria-label="Přečtěte si více informací o mně.">O mně</a>
                            </li>
                        </ul>
                    <li>
                </ul>
                <i class="fa-solid fa-bars"></i>
            </nav>
        `;
  }
}
