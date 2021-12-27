import React, { useState } from 'react'

import Card from '../../UI/Card'
import styles from './UserForm.module.css'
import Button from '../../UI/Button'

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const submitFormHandler = (event) => {
    event.preventDefault()

    const entredUserData = {
      name: enteredName,
      age: enteredAge,
    }

    props.onSaveUserDada(entredUserData)

    setEnteredName('')
    setEnteredAge('')
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={submitFormHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
          <label>Age (Years)</label>
          <input
            type="number"
            step="1"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  )
}

export default UserForm
