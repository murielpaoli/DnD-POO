// Arquivo Elf.ts

import Race from './Race';

let elfInstancesCounter = 0;

export default class Elf extends Race {
    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        elfInstancesCounter += 1;
    }

    get maxLifePoints(): number {
        return 99;
    }

    static createdRacesInstances(): number {
        return elfInstancesCounter;
    }
}
