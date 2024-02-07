import Battle from './Battle';
import Fighter from '../Fighter/Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';

export default class PVE extends Battle {
  private _char: Fighter;
  private _monsters: (SimpleFighter | Fighter) [];
  constructor(char: Fighter, monsters: (SimpleFighter | Fighter)[]) {
    super(char);
    this._char = char;
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (monster.lifePoints > 0 && this._char.lifePoints > 0) {
        monster.attack(this._char);
        this._char.attack(monster);
        console.log('Monstro:', monster.lifePoints);
        console.log('Char:', this._char.lifePoints);
      }
    });
    return super.fight();
  }
}
