import { signGuestBook, getGuestBook } from './serverHandler'

export const screenSpaceUI = new UICanvas()
screenSpaceUI.visible = true

let UIOpenTime

const imageTexture = new Texture('images/UI_Guestbook.png')
const scaleMultiplier = 0.7

export let guestBookPage = 1

export async function openUI() {
  UIOpenTime = +Date.now()
  background.visible = true
  background.isPointerBlocker = true
  SignButton.visible = true
  NextButton.visible = true
  LastButton.visible = true
  signaturesUI.visible = true
  SignButton.isPointerBlocker = true
  NextButton.isPointerBlocker = true
  LastButton.isPointerBlocker = true
  guestBookPage = 1
  getGuestBook()
}

export function closeUI() {
  SignButton.visible = false
  NextButton.visible = false
  LastButton.visible = false
  signaturesUI.visible = false
  SignButton.isPointerBlocker = false
  NextButton.isPointerBlocker = false
  LastButton.isPointerBlocker = false
  background.visible = false
  background.isPointerBlocker = false
  // hide warnings
}

export const background = new UIImage(screenSpaceUI, imageTexture)
background.name = 'background'
background.width = 1024 * scaleMultiplier
background.height = 921 * scaleMultiplier
background.hAlign = 'center'
background.vAlign = 'center'
background.sourceLeft = 0
background.sourceTop = 76
background.sourceWidth = 1024
background.sourceHeight = 921
background.visible = false
background.isPointerBlocker = false

export const signaturesUI = new UIText(background)
signaturesUI.value = 'Signatures go here'
signaturesUI.name = 'signatures'
signaturesUI.width = '650px'
signaturesUI.height = '800px'
signaturesUI.hAlign = 'center'
signaturesUI.vAlign = 'center'
signaturesUI.positionY = 0
signaturesUI.positionX = 0
signaturesUI.fontSize = 25
signaturesUI.vTextAlign = 'center'
signaturesUI.hTextAlign = 'center'
signaturesUI.color = Color4.FromHexString('#53508F88')

export const SignButton = new UIImage(background, imageTexture)
SignButton.name = 'SignButton'
SignButton.width = 460 * scaleMultiplier
SignButton.height = 75 * scaleMultiplier
SignButton.hAlign = 'center'
SignButton.vAlign = 'center'
SignButton.positionY = (-839 + 921 / 2) * scaleMultiplier
SignButton.positionX = 0
SignButton.sourceLeft = 76
SignButton.sourceTop = 0
SignButton.sourceWidth = 460
SignButton.sourceHeight = 75
SignButton.visible = false
SignButton.isPointerBlocker = false
SignButton.onClick = new OnClick(() => {
  /////  do I add MANY 0s to the eth number????
  signGuestBook()
  closeUI()

  log('signed guestbook')
})

export const NextButton = new UIImage(background, imageTexture)
NextButton.name = 'LastButton'
NextButton.width = 76 * scaleMultiplier
NextButton.height = 76 * scaleMultiplier
NextButton.hAlign = 'center'
NextButton.vAlign = 'center'
NextButton.positionY = 0
NextButton.positionX = -300
NextButton.sourceLeft = 0
NextButton.sourceTop = 0
NextButton.sourceWidth = 75
NextButton.sourceHeight = 75
NextButton.visible = false
NextButton.isPointerBlocker = false
NextButton.onClick = new OnClick(() => {
  guestBookPage += 1
  getGuestBook()
})

export const LastButton = new UIImage(background, imageTexture)
LastButton.name = 'NextButton'
LastButton.width = 76 * scaleMultiplier
LastButton.height = 76 * scaleMultiplier
LastButton.hAlign = 'center'
LastButton.vAlign = 'center'
LastButton.positionY = 0
LastButton.positionX = 300
LastButton.sourceLeft = 537
LastButton.sourceTop = 0
LastButton.sourceWidth = 75
LastButton.sourceHeight = 75
LastButton.visible = false
LastButton.isPointerBlocker = false
LastButton.onClick = new OnClick(() => {
  guestBookPage -= 1
  if (guestBookPage < 1) {
    guestBookPage = 1
  }
  getGuestBook()
})

// Instance the input object
const input = Input.instance

//button down event
input.subscribe('BUTTON_DOWN', ActionButton.POINTER, false, (e) => {
  const currentTime = +Date.now()
  let isOpen: boolean
  if (background.visible) {
    isOpen = true
  } else {
    isOpen = false
  }

  if (isOpen && currentTime - UIOpenTime > 100) {
    closeUI()
  }
})
