import { useState } from 'react'
import './App.css'
import { ImagesGallery } from './components/ImagesGallery/ImagesGallery'
import { SearchBar } from './components/SearchBar/SearchBar'
import { FetchImages } from './fetch-api'
import { Loader } from './components/Loader/Loader'
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage'

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (word) => {

    try {  
      setImages([])
      setError(false);
      setLoading(true);
      const data = await FetchImages(word);
      setImages(data);
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  
  }
  

  return (
    <>
    <SearchBar onSearch={handleSearch}/>
    {error && <ErrorMessage />}
  {images.length > 0 && <ImagesGallery images={images}/>}
  {loading && <Loader/>}
</>
  )
}

export default App
