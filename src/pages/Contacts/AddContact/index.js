import { useState } from "react";
import classes from "./index.module.css";

const BR_COLOR = {
    REQUER: '#767676',
    NOT_REQUER: 'red'
}
export function AddContact({ addNewContact, name, tel, setName, setTel }) {

    const [brColorName, setBrColorName] = useState(BR_COLOR.REQUER)
    const [brColorTel, setBrColorTel] = useState(BR_COLOR.REQUER)

    const handleInputTelChange = (e) => {
        setTel(e.target.value);
    }
    const handleInputNameChange = (e) => {
        setName(e.target.value);
    }
    let handlerAddContact = () => {
        console.log(!name)
        !!name ? setBrColorName(BR_COLOR.REQUER) :  setBrColorName(BR_COLOR.NOT_REQUER)
        !!tel ? setBrColorTel(BR_COLOR.REQUER) :  setBrColorTel(BR_COLOR.NOT_REQUER)
        if (name && tel) {
             addNewContact({
            name: name,
            tel: tel
        })
        setName('')
        setTel('')
        }
    }

    return (
        <div className={classes.container_addcontact} >
            <input type='text'
                placeholder='Name'
                value={name}
                onChange={handleInputNameChange}
                 style={{border: `3px solid ${brColorName}`}} />

            <input type="tel"
                placeholder='Telephone'
                value={tel}
                onChange={handleInputTelChange} 
                style={{border: `3px solid ${brColorTel}`}} />

            <button type='button' onClick={handlerAddContact}>Save</button>
        </div>
    );
}
