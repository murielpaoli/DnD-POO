import Race from './Race';

export default class Orc extends Race {
  private static instances = 0;
  private readonly _maxLifePoints = 74;

  constructor(
    readonly name: string,
    readonly dexterity: number,
  ) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  static override createdRacesInstances(): number {
    return Orc.instances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
