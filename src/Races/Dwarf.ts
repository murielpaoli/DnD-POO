import Race from './Race';

export default class Dwarf extends Race {
  private static instances = 0;
  private readonly _maxLifePoints = 80;

  constructor(
    readonly name: string,
    readonly dexterity: number,
  ) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  static override createdRacesInstances(): number {
    return Dwarf.instances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
