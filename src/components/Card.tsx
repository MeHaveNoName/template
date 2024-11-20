import styles from './style.module.scss'

export const Card = (props) => {
    const {image, header, body, link} = props
    

    return (
        <div className={styles.card}>
            <img src={image} alt="" />

            <h2>{header}</h2>

            <p>{body}</p>

            <a href={link}>Click me</a>
        </div>
    )
}