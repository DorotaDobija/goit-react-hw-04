
import './App.css'

import { SearchBar } from './components/SearchBar/SearchBar'
import { FetchImages } from './fetch-api'

function App() {
  

  const handleSearch = (word) => {
  FetchImages(word)
  }

  return (
    <>
    <SearchBar onSearch={handleSearch}/>
</>
  )
}

export default App
