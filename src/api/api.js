import axios from 'axios'

export const getData = async () => {
  try {
    const data = await axios.get('fakeData.json')
    return data
  } catch(e) {
    console.log('Something went wrong!')
  }
}