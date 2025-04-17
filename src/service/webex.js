export const generateWebexRoom = async (activity) => {
  const res = await fetch(`${import.meta.env.VITE_WEBEX_SERVER_URL}/create-room`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      roomTitle: activity.region + ' 봉사',
      userEmails: activity.curUser.map((user) => user.email),
    }),
  })

  const { roomUrl } = await res.json()
  activity.webexUrl = roomUrl
}
