import { buildBuilderScene } from './builderContent'
import { GuestBook } from './guestbook'
import { Tshirt } from './tshirt'

export class Rotate implements ISystem {
  update() {
    let transform = nft_entity.getComponent(Transform)
    transform.rotate(new Vector3(0,1,0),1)

    let transform1 = nft_entity1.getComponent(Transform)
    transform1.rotate(new Vector3(0,1,0),1)
  }
}
engine.addSystem(new Rotate())

buildBuilderScene()

const clip = new AudioClip("sounds/bgm.mp3")
const source = new AudioSource(clip)
source.loop = true
source.volume = 1;
source.playing = true
let guestBook1 = new GuestBook(
  {
    position: new Vector3(14, 0, 4),
    rotation: Quaternion.Euler(0, 0, 0),
  },
  'March March'
)
guestBook1.addComponent(source)

let guestBook2 = new GuestBook(
  {
    position: new Vector3(14, 0, 12),
    rotation: Quaternion.Euler(0, 0, 0),
  },
  'March March'
)
guestBook2.addComponent(source)


const nftShape = new GLTFShape(
  'models/march/m_ukrshirt.glb'
)
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true

const nft_entity = new Tshirt(new Transform({
  position: new Vector3(4, 1.5, 4),
  scale: new Vector3(2, 2, 2),
}))

nft_entity.addComponent(source)
engine.addEntity(nft_entity)

const nft_entity1 = new Tshirt(new Transform({
  position: new Vector3(4, 1.5, 12),
  scale: new Vector3(2, 2, 2),
}))

nft_entity1.addComponent(source)
engine.addEntity(nft_entity1)

// billbroad

let billbroad = new Entity()
billbroad.addComponent(
  new Transform({
    position: new Vector3(8, 0, 15.6),
    scale: new Vector3(1, 1, 0.01),
  })
)
billbroad.addComponent(new GLTFShape('models/march/billboardV0b.gltf'))
engine.addEntity(billbroad)




