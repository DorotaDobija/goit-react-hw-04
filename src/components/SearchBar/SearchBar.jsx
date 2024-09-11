
import css from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';


export const SearchBar = ({ onSearch }) => {

const handleSubmit = (e) => {
e.preventDefault();
const form = e.target;
const searchWord = form.elements.search.value;

if (searchWord === '') {
toast.error("Complete the word !")
return;
}

onSearch(searchWord);
form.reset();
}

    return <header>
    <form onSubmit={handleSubmit} className={css.search_box}>
    <input type="text" name="search" placeholder="Search images and photo" className={css.search_input} autoComplete="off" autoFocus></input>
    <Toaster  position="top-right" reverseOrder={false}/>
    <button type="submit">Search</button>
    </form>
    </header>
}