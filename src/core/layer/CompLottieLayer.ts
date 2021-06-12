import { initialDefaultFrame } from '../contant';
import BaseLottieLayer from './BaseLottieLayer';

export default class CompLottieLayer extends BaseLottieLayer {
  private childLayers = [];
  private layers: any;
  constructor(layer) {
    super(layer);

    this.layers = layer.layers;

    this.update(initialDefaultFrame);
  }

  /**
   * update frame
   */
  update(frameNum: number) {
    frameNum -= this.startTime;
    frameNum = frameNum / this.stretch;

    for (let i = 0; i < this.childLayers.length; i++) {
      this.childLayers[i].update(frameNum);
    }
  }

  /**
   * add child layer
   */
  addChild(node) {
    node.parent = this;
    this.childLayers.push(node);
  }
}