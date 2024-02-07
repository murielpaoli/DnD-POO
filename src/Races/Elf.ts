import Race from './Race';

export default class Elf extends Race {
  private static instances = 0;
  private readonly _maxLifePoints = 99;

  constructor(
    readonly name: string,
    readonly dexterity: number,
  ) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  static override createdRacesInstances(): number {
    return Elf.instances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
