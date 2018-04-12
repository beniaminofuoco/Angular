export class CounterService {
    active = 0;
    inactive = 0;

    incrementActive(){
        this.active++;
        console.log('Il numero di click su Active è: '+this.active);
    }

    incrementInactive(){
        this.inactive++;
        console.log('Il numero di click su Inactive è: '+this.inactive);
    }
}
