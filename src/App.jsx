import { useState } from 'react'
import './App.css'
import { ImagesGallery } from './components/ImagesGallery/ImagesGallery'
import { SearchBar } from './components/SearchBar/SearchBar'
import { FetchImages } from './fetch-api'
import { Loader } from './components/Loader/Loader'
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage'
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn'
import { useSearchContext } from './hooks/useSearchContext'
import { ImageModal } from './components/ImageModal/ImageModal'

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const { searchWord } = useSearchContext();

  const handleSearch = async (word) => {

    try {  
      setPage(1)
      setImages([])
      setError(false);
      setLoading(true);
      const data = await FetchImages(word, page);
      setImages(data);
      setPage((prev) => prev + 1)
      // console.log(page)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  
  }

  // console.log(searchWord)

  const handleClick = async () => {
    try {
    setLoading(true);
    const data = await FetchImages(searchWord, page);
    setImages((prev)=> [...prev, ...data]);
    console.log(data);
    setPage((prev) => prev + 1)
    // console.log(page)
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
  {images.length > 0 && <>
    <ImagesGallery images={images}/>
    <LoadMoreBtn paginationClick={handleClick}/>
    <ImageModal images={images}/>
    </>}
  {loading && <Loader/>}
</>
  )
}

export default App
