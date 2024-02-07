// Arquivo Orc.ts

import Race from './Race';

let orcInstancesCounter = 0;

export default class Orc extends Race {
    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        orcInstancesCounter += 1;
    }

    get maxLifePoints(): number {
        return 74;
    }

    static createdRacesInstances(): number {
        return orcInstancesCounter;
    }
}
