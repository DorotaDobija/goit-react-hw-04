import {ImageCard} from '../ImageCard/ImageCard'
import  css  from './ImagesGallery.module.css'


export const ImagesGallery = ({images}) => {
    return <ul className={css.gallery}>
        {images.map((image)=><li key={image.id} className={css.list_item}><ImageCard image={image}/></li>)}
    </ul>
}