import css from './ImageCard.module.css'

export const ImageCard = ({url, alt}) => {
    return <div>
    <img className={css.image} src={url} alt={alt} />
  </div>
}