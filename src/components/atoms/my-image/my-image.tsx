import { ComponentInterface, h, Prop, Component } from '@stencil/core'
@Component({
  tag: 'my-image',
  styleUrl: 'my-image.scss',
  shadow: true
})
export class Image implements ComponentInterface {
  @Prop() public url: string;
  render() {
    return (
      <img class='image center' src={this.url} alt='photo'/>
    )
  }
}