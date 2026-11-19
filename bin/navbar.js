class navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <a href="index.html" class="logo>
                    Barkif Trakjian
                </a>

                <ul class="list-inline nav-links flex-wrap mt-4">
                    <li><a class="btn" href="../index.html">/</a></li>
                    <li><a class="btn" href="./about.html">About</a></li>
                    <li><a class="btn" href="./hobbies.html">Hobbies</a></li>
                    <li><a class="btn" href="./current.html">Current</a></li>
                    <li><a class="btn" href="./gallery.html">Gallery</a></li>
                    <li><a class="btn" href="./goals.html">Goals</a></li>
                    <li><a class="btn" href="./portfolio.html">Portfolio</a></li>
                </ul>
            </nav>
        `
    }
}

customElements.define("the-navbar", navbar)