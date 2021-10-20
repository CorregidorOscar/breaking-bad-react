import style from './Card.module.css'

export default function Card({ char_id, name, img, status, occupation }) {
    return (
        <div className={style.card}>
            <div className={style.cardImg}>
                <img src={img} alt="" />
            </div>
            <div className={style.cardInfo}>
                <p>{`Name: ${name}`}</p>
                <p>{`Status: ${status}`}</p>
                <p>{`Occupation: ${occupation}`}</p>
            </div>
        </div>
    )
}