
async function fetchProfileData(url) {
  return await (await fetch(url)).json()
}