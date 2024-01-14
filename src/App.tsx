import {h} from "preact"
import "./app.css"
import {Gapless5} from "@regosen/gapless-5"

const player = new Gapless5({loop: true})
player.addTrack("beats.ogg")

export function App() {
  function play() {
    player.play()
  }

  return (
    <div>
      <button onClick={play}>Play</button>
    </div>
  )
}
