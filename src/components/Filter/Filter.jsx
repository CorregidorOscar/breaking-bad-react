import style from './Filter.module.css'
import Select from 'react-select'
export default function Filter({ name, status }) {


    return (
        <Select name={name} id="selectName">
            <option defaultValue value="0"> Elige una opción </option>
            {
                status.map((e, i) => (
                    <option value={e} key={i}>{e} </option>
                ))
            }
        </Select>
    );
}

