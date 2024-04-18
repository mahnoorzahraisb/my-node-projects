function delay(delay) {
    return new Promise(r => {
        setTimeout(r, delay);
    });
}
class Timer {
    counter;
    constructor(counter = 10) {
        this.counter = counter;
        this.doTimer();
    }
    async doTimer() {
        while (this.counter > 1) {
            await delay(1000);
            this.counter = this.counter - 1;
            console.log(this.counter);
        }
    }
}
let timer = new Timer();
timer.doTimer();
export {};
