import style from './Landing.module.css'
import { NavLink } from 'react-router-dom'

export default function Landing() {

    return (
        <div className={style.bg}>
            <NavLink to='/home'>
                <button>
                    Ir Home
                </button>
            </NavLink>
        </div>
    )
}