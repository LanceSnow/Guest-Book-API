import { buildBuilderScene } from './builderContent'
import { GuestBook } from './guestbook'

// buildBuilderScene()

let guestBook = new GuestBook(
  {
    position: new Vector3(8, 0, 10),
    rotation: Quaternion.Euler(0, 300, 0),
  },
  'March March'
)

// Create AudioClip object, holding audio file
const clip = new AudioClip("sounds/bgm.mp3")

// Create AudioSource component, referencing `clip`
const source = new AudioSource(clip)

// Add AudioSource component to entity
guestBook.addComponent(source)
source.loop = true
source.volume = 1;
// Play sound
source.playing = true


