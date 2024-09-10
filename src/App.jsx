import { useState } from 'react'
import './App.css'
import {ImagesGallery} from './components/ImagesGallery/ImagesGallery'
import { SearchBar } from './components/SearchBar/SearchBar'
import { FetchImages } from './fetch-api'

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (word) => {
  const data = await FetchImages(word);
  setImages(data)
  }

  return (
    <>
    <SearchBar onSearch={handleSearch}/>
    <ImagesGallery images={images}/>
</>
  )
}

export default App
