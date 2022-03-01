import { openUI } from './ui'

export class GuestBook extends Entity {
  eventName: string
  constructor(
    transform: TranformConstructorArgs,
    eventName: string

    //,sound: AudioClip
  ) {
    super()
    engine.addEntity(this)

    this.addComponent(new GLTFShape('models/guestbook/guestbook.glb'))
    this.addComponent(new Transform(transform))

    this.eventName = eventName

    this.addComponent(
      new OnPointerDown(
        () => {
          openUI(eventName)
          log('OPENED GUESTBOOK')
        },
        { hoverText: 'Open' }
      )
    )

    let guestBookBase = new Entity()
    guestBookBase.addComponent(new Transform())
    guestBookBase.addComponent(
      new GLTFShape('models/guestbook/guestbook_base.glb')
    )
    guestBookBase.setParent(this)
  }
}
