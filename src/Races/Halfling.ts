// Arquivo Halfling.ts

import Race from './Race';

let halflingInstancesCounter = 0;

export default class Halfling extends Race {
    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        halflingInstancesCounter += 1;
    }

    get maxLifePoints(): number {
        return 60;
    }

    static createdRacesInstances(): number {
        return halflingInstancesCounter;
    }
}
