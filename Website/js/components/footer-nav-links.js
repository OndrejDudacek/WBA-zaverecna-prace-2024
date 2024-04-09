export default class FooterNavLinks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav>
            <ul>
                <li>
                    <a href="index.html" aria-label="Vraťte se na hlavní stránku."><img class="logo" src="../imgs/logo.svg" alt="logo"></a>
                </li>
                <li>
                    <a href="index.html" aria-label="Vraťte se na hlavní stránku.">
                        <h3>Ondřej Dudáček</h3>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="photography.html" aria-label="Podívejte se na galerii mých nejlepších fotografií.">
                        <h3>Fotografie</h3>
                    </a>
                </li>
                <li>
                    <a href="photography.html#portraits" aria-label="Podívejte se na mé nejlepší portréty">Portréty</a>
                </li>
                <li>
                    <a href="photography.html#film" aria-label="Podívejte se na mé nejlepší fotografie focene na film.">Film 35mm</a>
                </li>
                <li>
                    <a href="photography.html#marketing" aria-label="Podívejte se na mé nejlepší marketingové fotografie">Marketing</a>
                </li>
                <li>
                    <a href="photography.html#street" aria-label="Podívejte se na mé nejlepší fotky z ulic.">Street</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="services.html" aria-label="Přečtěte si informace o službách, které poskytuji.">
                        <h3><s>Služby</s></h3>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="contact.html" aria-label="Podívejte se na možnosti, jak mě kontaktovat.">
                        <h3>Kontakt</h3>
                    </a>
                </li>
                <li>
                    <a href="contact.html#contact-form" aria-label="Napište mi mail pomocí kontaktního formuláře.">Kontaktní formulář</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="about.html" aria-label="Přečtěte si více informací o mně.">
                        <h3>O mně</h3>
                    </a>
                </li>
                <li>
                    <a href="about.html#about" aria-label="Přečtěte si více informací o tom, kdo jsem.">Kdo jsem</a>
                </li>
                <li>
                    <a href="about.html#gear" aria-label="Přečtěte si více informací o mé technice">Technika</a>
                </li>
                <li>
                    <a href="about.html#motivation" aria-label="Přečtěte si více informací o mé motivaci.">Motivace</a>
                </li>
                <li>
                    <a href="about.html#cv" aria-label="Podívejte se na můj životopis.">Životopis</a>
                </li>
            </ul>
        </nav>
        <hr>
        <section class="socials">
            <nav>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/ondra_dudaceeek/" aria-label="Podívejte se na můj instagram."><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/OndrejDudacek" aria-label="Podívejte se na můj github."><i class="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ond%C5%99ej-dud%C3%A1%C4%8Dek-00a430299/" aria-label="Podívejte se na můj linkedin."><i
                                class="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="mailto:ondrej.dudacek@gmail.com" aria-label="Pošlete mi mail."><i class="fas fa-envelope"></i></a>
                    </li>
                </ul>
            </nav>
            <p>@ Ondřej Dudáček 2024</p>
        </section>
        `;
  }
}
