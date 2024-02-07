import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter,
    protected enemies: SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    const liveEnemies = this.enemies.filter((enemy) => enemy.lifePoints > 0);

    if (liveEnemies.length === 0) {
      return super.fight();
    }

    liveEnemies.forEach((enemy) => {
      this.player.attack(enemy);
      enemy.attack(this.player);
    });

    if (this.player.lifePoints === -1) {
      return super.fight();
    }

    return this.fight();
  }
}