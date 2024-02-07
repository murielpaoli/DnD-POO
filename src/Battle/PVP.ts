import Fighter from '../Fighter/Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _char1: Fighter;
  private _char2: Fighter;
  constructor(private char1: Fighter, char2: Fighter) {
    super(char1);
    this._char1 = char1;
    this._char2 = char2;
  }

  fight(): number {
    while (this._char1.lifePoints > 0 && this._char2.lifePoints > 0) {
      this.char1.attack(this._char2);
      this._char2.attack(this._char1);
    }
    return super.fight();
  }
}

export default PVP;
