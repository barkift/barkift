class lavabar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="lava-bar">
                <div class="lava">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `
    }
}

customElements.define("lava-bar", lavabar)