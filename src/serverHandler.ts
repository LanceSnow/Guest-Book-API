import { getUserData, UserData } from '@decentraland/Identity'

// get player data
export let userData: UserData

export async function setUserData() {
  const data = await getUserData()
  log(data.displayName)
  userData = data
}

// external servers being used by the project - Please change these to your own if working on something else!
export let fireBaseServer =
  'https://testdouble.loserchick.fi/api/activity/march/'

// get latest scoreboard data from server
export async function getGuestBook() {
  // try {
    let url = "https://testdouble.loserchick.fi/api/activity/march/get_guest_book"
    let response = await fetch(url)
    let json = await response.json()
    log(json)
    return json.data
  // } catch (e) {
  //   log('error fetching scores from server ', e)
  // }
}

// change data in scoreboard
export async function signGuestBook() {
  if (!userData) {
    await setUserData()
  }
  try {
    let url = "https://testdouble.loserchick.fi/api/activity/march/sign_guest_book"
    let body = JSON.stringify({
      id: (await userData).userId,
      name: (await userData).displayName,
    })
    log(body)
    let response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    })
    return response.json()
  } catch (e) {
    log('error posting to server ', e)
  }
}
