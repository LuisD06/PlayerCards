import { ComponentInterface, h, Prop, Component } from '@stencil/core'
import { Player } from '../../../utils/interfaces/player';
@Component({
  tag: 'card-grid',
  styleUrl: 'card-grid.scss',
  shadow: true
})
export class Grid implements ComponentInterface {
  @Prop() public players: Player[] = [];
  render() {
    return (
      <div class="card-grid">
        {
          this.players.map((player) => {
            return <my-card key={Math.random() * 16} image-url={player.img} player-name={player.name}/>
          })
        }
      </div>
    )
  }
}