class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Leonardo VIicente Palma Pérez`;
  }
}
customElements.define("mi-footer", MiFooter);
