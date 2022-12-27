import { ComponentInterface, h, Prop, Component } from '@stencil/core'
@Component({
  tag: 'my-card',
  styleUrl: 'my-card.scss',
  shadow: true
})
export class Card implements ComponentInterface {
  @Prop() public imageUrl: string;
  @Prop() public playerName: string;
  render() {
    return (
      <div class='card'>
        <div class="card__header">
          <my-image url={this.imageUrl} />
          <div class='card__title-wrapper'>
            <my-text text={this.playerName} ></my-text>
          </div>
        </div>
        <div class='card__body'>
          <my-button text='Ver más' />
        </div>
      </div>
    )
  }
}