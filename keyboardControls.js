class keyboardIInput {
    constructor() {
        this.keys = [];
        document.addEventListener('keydown', ev => {
            this.keys[ev.key] = true;
        });
        document.addEventListener('keyup', ev => {
            this.keys[ev.key] = false;
        });
    }
}
export default keyboardIInput;