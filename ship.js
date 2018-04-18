import Entity from './entity';
import Bullet from './bullet';

class Ship extends Entity {
  constructor(url, pos, size, speed) {
    super(url, pos, size, speed);
    this.bullets = [];
  }

  // shoot() {
    
  // }

}

export default Ship;