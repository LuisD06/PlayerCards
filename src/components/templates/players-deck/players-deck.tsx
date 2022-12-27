import { ComponentInterface, h, Component } from '@stencil/core'
import { PLAYERS } from '../../../constants/players'
@Component({
  tag: 'players-deck',
  styleUrl: 'players-deck.scss',
  shadow: true
})
export class Deck implements ComponentInterface {
  render() {
    return (
      <div class='players-deck'>
        <card-grid players={PLAYERS} />
      </div>
    )
  }
}