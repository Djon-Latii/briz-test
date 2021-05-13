export function ContactsTable({ contacts, delContact, handleChangeContact}) {

    const contactList = contacts.map(({id, name, tel}) => {
       return( <tr key={id.toString()}>
            <td>{name}</td>
            <td>{tel}</td>
            <td><button onClick={() => delContact(id)}>Delete</button></td>
            <td><button onClick={() => handleChangeContact(id)}>Change</button></td>
        </tr>)
    })

    return (
        <div >
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Telephone</th>
                </tr> 
                </thead>
               
                <tbody>
                    {contactList}
                </tbody>
            </table>
        </div>
    );
}
