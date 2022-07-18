const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchNASAData = async () => {// fetchNASAData takes in no parameters and returns a promise}
  try {
    const response = await fetch(`${url}${api_key}`) // fetch the data from the API
    const data = await response.json()
    console.log('NASA APOD data', data)
    displayData(data)// displayData is a function that takes in data and displays it on the page
  } catch (error) {
    console.log(error) //console.log the error if there is one
  }
}

const displayData = data => {// displayData takes in data and displays it on the page
  document.getElementById('title').textContent = data.title
  document.getElementById('date').textContent = data.date
  document.getElementById('picture').src = data.hdurl
  document.getElementById('explanation').textContent = data.explanation
}

fetchNASAData()
displayData()

//conditional branchish