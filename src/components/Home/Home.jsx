import { NavLink } from 'react-router-dom'
import style from './Home.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Card from '../Card/Card'

export default function Home() {

    const [characters, setCharacters] = useState();

    useEffect(() => {
        let char = getCharacters();

        char.then(r => {
            setCharacters(r)

        });
    }, []);
    // useEffect(() => {
    //     let per = getCharacters();

    //     per.then((x) => { setCharacters(x) })

    // }, []);

    async function getCharacters() {
        const api = await axios.get('https://www.breakingbadapi.com/api/characters');
        console.log(api.data)
        return (api.data);

    }

    // useEffect sin la llamada async a getCharacters
    // useEffect(() => {
    //     let per = getCharacters();
    //     per.then((x) => { setCharacters(x) })
    // }, [])


    // function getCharacters() {
    //     const api = axios.get('https://www.breakingbadapi.com/api/characters').then((c) => { return c.data });
    //     return api;
    // }
    //   getCharacters();

    return (
        <div className={style.bg}>
            <nav>
                <NavLink to='/'>
                    <button>
                        Ir Landing
                    </button>
                </NavLink>
            </nav>
            <div className={style.cards}>
                {
                    // signo ? si tira undefined al demorar tener que llenar el array character
                    characters?.map((e) => {
                        return <Card
                            key={e.char_id} name={e.name} img={e.img} status={e.status} occupation={e.occupation}
                        />
                    })
                }
            </div>
        </div>
    );
}