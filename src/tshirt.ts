
export class Tshirt extends Entity {
  constructor(
    transform: TranformConstructorArgs
  ) {
    super()
    engine.addEntity(this)
    this.addComponent(new GLTFShape('models/march/buy_btn.glb'))
    // this.addComponent(new GLTFShape('models/vendingmachineV0/vendingmachine.gltf'))
    this.addComponent(new Transform(transform))

    this.addComponent(
      new OnPointerDown(
        (e) => {
          openExternalURL('https://market.decentraland.org/contracts/0xdcdfe58de55952aef1e68cefee9248c6848966ed/items/0')
        },
        { hoverText: 'Buy' }
      )
    )

    let cloth = new Entity()
    cloth.addComponent(new Transform({position: new Vector3(0, -1.2, 0)}))
    cloth.addComponent(
      new GLTFShape('models/march/m_ukrshirt.glb')
    )
    cloth.setParent(this)
  }
}
