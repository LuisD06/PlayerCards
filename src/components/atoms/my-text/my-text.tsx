import { ComponentInterface, h, Prop, Component } from '@stencil/core'
@Component({
  tag: 'my-text',
  styleUrl: 'my-text.scss',
  shadow: true
})
export class Text implements ComponentInterface {
  @Prop() public text: string;
  render() {
    return (
      <span class='text'>
        {this.text}
      </span>
    )
  }
}