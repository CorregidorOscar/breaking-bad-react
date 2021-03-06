import style from './Card.module.css'

export default function Card({ birthday, name, img, status, occupation }) {
    return (
        <div className={style.card}>
            <div className={style.cardImg}>
                <img src={img} alt="" />
            </div>
            <div className={style.cardInfo}>
                <p><span>Name: </span>{name}</p>
                <p><span>Status: </span>{status}</p>
                <p><span>Birthday: </span>{birthday}</p>
                <p><span>Occupation: </span>{occupation}</p>
            </div>
        </div>
    )
}