import classes from './index.module.css';
import { useState } from 'react';
import { AddContact } from './AddContact';
import { ContactsTable } from './ContactsTable'


const ID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export function Contacts() {
    const [contacts, setContacts] = useState([])
    const [changeContact, setChangeContact] = useState({})
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')

    const addNewContact = (newContact) => {
        if (changeContact.id) {
            let temp = contacts.map((item) => {
                if (item.id === changeContact.id) {
                    return { ...newContact, id: changeContact.id }
                }
                return item
            })
            setContacts(temp)
            setChangeContact('')
        } else {
            setContacts([...contacts, { ...newContact, id: ID() }])
        }
    }

    const delContact = (id) => {
        let tempArrContacts = [...contacts]
        tempArrContacts.splice(contacts.findIndex(item => item.id === id), 1)
        setContacts(tempArrContacts)
    }

    const handleChangeContact = (id) => {
        let mustChangeContact = [...contacts].splice(contacts.findIndex(item => item.id === id), 1)[0]
        setChangeContact(mustChangeContact)
        setName(mustChangeContact.name)
        setTel(mustChangeContact.tel)
    }

    return (
        <div className={classes.container} >
            <AddContact
                name={name}
                tel={tel}
                setName={setName}
                setTel={setTel}
                addNewContact={addNewContact}
            />
            <ContactsTable contacts={contacts} delContact={delContact} handleChangeContact={handleChangeContact} />
        </div>
    );
}
