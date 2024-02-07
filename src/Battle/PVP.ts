import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected player: Fighter, protected enemy: Fighter) {
    super(player);
  }

  fight(): number {
    this.player.attack(this.enemy);
    this.enemy.attack(this.player);

    if (this.player.lifePoints === -1) {
      return super.fight();
    }

    if (this.enemy.lifePoints === -1) {
      return super.fight();
    }

    return this.fight();
  }
}

