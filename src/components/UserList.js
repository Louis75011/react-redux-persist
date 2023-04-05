import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { addUser, deleteUser } from '../store/usersSlice';

export default function UserList() {
  const [name, setName] = useState("")
  const users = useSelector(store => store.users)
  const dispatch = useDispatch()
  console.log(users);

  function handleAdd(e) {
    e.preventDefault()
    if (name && name.length <= 25) {
        dispatch(addUser(name))
        setName("")
    }
  }

  function handleDelete(e, index) {
    e.preventDefault()
    dispatch(deleteUser(index))
  }

  return (
    <div className='app'>
        <form>
            <div className='input-action'>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button onClick={handleAdd}>Ajouter</button>
            </div>

            <div className='flex-column'>
                {users.map((el, index) => {
                    return <p key={index}>{el} <button onClick={e => handleDelete(e, index)}>Suppression</button></p>
                })}
            </div>
        </form>
      </div>
  )
}
