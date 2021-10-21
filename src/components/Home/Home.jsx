import { NavLink } from 'react-router-dom'
import style from './Home.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Card from '../Card/Card'
// import Filter from '../Filter/Filter'
import Select from 'react-select'

export default function Home() {

    const [characters, setCharacters] = useState([]);
    //para obtener la busqueda del usuario
    const [search, setSearch] = useState([]);

    let selected = '';

    useEffect(() => {
        let char = getCharacters();

        char.then(r => {
            setSearch(r);
            setCharacters(r)

        });
    }, []);

    async function getCharacters() {
        const api = await axios.get('https://www.breakingbadapi.com/api/characters');

        return (api.data);

    }

    function handleInputChange(event) {
        // console.log(event.target.value);
        const value = event.target.value;
        // sino f
        const filter = characters.filter(character => { return character.name.toLowerCase().includes(value.toLowerCase()); });
        // console.log(filter);
        setSearch(filter);
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
    const estados = [{ value: 'Clear', label: 'Clear' },
    {
        value: 'Alive', label: 'Alive'
    },
    { value: 'Deceased', label: 'Deceased' },
    { value: 'Presumed dead', label: 'Presumed dead' },];
    function handleChange(e) {
        const value = e.value;
        selected = value;
        if (value === 'Clear') setSearch(characters)
        else {
            const filter = characters.filter(character => { return character.status.toLowerCase().includes(value.toLowerCase()); });

            setSearch(filter);
        }
    }
    return (
        <div className={style.bg}>
            <nav className={style.nave}>

                <NavLink to='/'>
                    <button className={style.btnNav}>
                        Ir Landing
                    </button>
                </NavLink>
                <input className={style.search} type="text" onChange={handleInputChange} />
                {/* <Filter name='Status' status={estados} onChange={handleFilter} /> */}
                <Select
                    className='status-filter'
                    classNamePrefix='Status'
                    name='hola'
                    value={selected}

                    onChange={handleChange}
                    isSearchable={false}
                    placeholder='Status Filter'
                    options={estados}
                />
                <NavLink to='/'>
                    <button className={style.btnNav}>
                        Otro boton
                    </button>
                </NavLink>
            </nav>
            <div className={style.cards}>
                {
                    // signo ? si tira undefined al demorar tener que llenar el array character
                    search.map((e) => (
                        <Card
                            key={e.char_id} name={e.name} img={e.img} status={e.status} birthday={e.birthday} occupation={e.occupation}
                        />
                    ))
                }
            </div>
        </div>
    );
}