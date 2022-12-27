import { ComponentInterface, h, Prop, Component } from '@stencil/core'
@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true
})
export class Button implements ComponentInterface {
  @Prop() public text: string;
  @Prop() public type: 'primary' | 'danger' | 'success' = 'primary';
  @Prop() public variant: 'solid' | 'dashed' | 'void' = 'solid';
  @Prop() public size: 'small' | 'large' | 'medium' = 'medium';
  render() {
    return (
      <button
        class={`button button--${this.type} button--${this.variant} button--${this.size}`}
      >
        {this.text}
      </button>
    )
  }
}