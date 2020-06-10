export const ENDPOINT = 'https://superrare.co/sr-json/v0/nfts/assets?categories=artwork&categories=artwork-v2'

const ARTWORK_SERVICE = {
  GET_ARTWORKS: async url => {
    const response = await fetch(ENDPOINT)
    return await response.json()
  }
}

export default ARTWORK_SERVICE
