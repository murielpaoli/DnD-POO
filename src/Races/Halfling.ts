import Race from './Race';

export default class Halfling extends Race {
  private static instances = 0;
  private readonly _maxLifePoints = 60;

  constructor(
    readonly name: string,
    readonly dexterity: number,
  ) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  static override createdRacesInstances(): number {
    return Halfling.instances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
