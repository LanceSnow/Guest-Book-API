import { buildBuilderScene } from './builderContent'
import { GuestBook } from './guestbook'

buildBuilderScene()
const clip = new AudioClip("sounds/bgm.mp3")
const source = new AudioSource(clip)
source.loop = true
source.volume = 1;
source.playing = true
let guestBook1 = new GuestBook(
  {
    position: new Vector3(8, 0, 8.5),
    rotation: Quaternion.Euler(0, 180, 0),
  },
  'March March'
)
guestBook1.addComponent(source)

// let guestBook2 = new GuestBook(
//   {
//     position: new Vector3(8, 0, 14.5),
//     rotation: Quaternion.Euler(0, 90, 0),
//   },
//   'March March'
// )
// guestBook2.addComponent(source)


// let guestBook3 = new GuestBook(
//   {
//     position: new Vector3(1.5, 0, 8),
//     rotation: Quaternion.Euler(0, 0, 0),
//   },
//   'March March'
// )
// guestBook3.addComponent(source)

// let guestBook4 = new GuestBook(
//   {
//     position: new Vector3(14.5, 0, 8),
//     rotation: Quaternion.Euler(0, 180, 0),
//   },
//   'March March'
// )
// guestBook4.addComponent(source)


// billbroad

// let billbroad = new Entity()s
// billbroad.addComponent(
//   new Transform({
//     position: new Vector3(8, 0, 8),
//   })
// )
// billbroad.addComponent(new GLTFShape('models/march/billboardV0b.gltf'))
// engine.addEntity(billbroad)




