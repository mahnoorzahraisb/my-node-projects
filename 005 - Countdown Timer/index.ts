function delay(delay: number) {
    return new Promise(r => {
        setTimeout(r, delay);
    })
}
class Timer {
    constructor(public counter = 10) {
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