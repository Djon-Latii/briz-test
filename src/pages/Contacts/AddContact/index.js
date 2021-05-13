export function AddContact({ addNewContact, name, tel, setName, setTel }) {

    const handleInputTelChange = (e) => {
        setTel(e.target.value);
    }
    const handleInputNameChange = (e) => {
        setName(e.target.value);
    }
    let handlerAddContact = () => {
        addNewContact({
            name: name,
            tel: tel
        })
        setName('')
        setTel('')
    }

    return (
        <div >
            <input type='text'
                placeholder='Name'
                value={name}
                onChange={handleInputNameChange} />

            <input type="tel"
                placeholder='Telephone'
                value={tel}
                onChange={handleInputTelChange} />

            <button type='button' onClick={handlerAddContact}>Save</button>
        </div>
    );
}
