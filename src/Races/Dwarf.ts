import Race from './Race';

let dwarfInstancesCounter = 0;

export default class Dwarf extends Race {
  constructor(name: string, dexterity: number) {
      super(name, dexterity);
      dwarfInstancesCounter += 1;
  }
  get maxLifePoints(): number {
      return 80;
  }
  static createdRacesInstances(): number {
      return dwarfInstancesCounter;
  }
}
