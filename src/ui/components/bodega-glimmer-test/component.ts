import Component, { tracked } from '@glimmer/component';

export default class BodegaGlimmerTest extends Component {
  @tracked myNumber = 1;

  make2() {
    this.myNumber = 2;
  }

  make3() {
    this.myNumber = 3;
  }
}
