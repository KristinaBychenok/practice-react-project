import React from 'react'

import UserForm from './UserForm/UserForm'

const NewUser = (props) => {
  const saveUserDadaHandler = (entredUserData) => {
    const savedUserData = {
      ...entredUserData,
      id: Math.random(),
    }

    const validCheck = {
      isFilledData:
        savedUserData.name.trim().length !== 0 &&
        savedUserData.age.trim().length !== 0,
      isValidAge: +savedUserData.age > 0,
    }

    if (!validCheck.isFilledData) {
      props.onValidCheck('Please enter a valid name and age (not-empty values)')
    } else if (!validCheck.isValidAge) {
      props.onValidCheck('Please enter a valid age (> 0)')
    } else {
      props.onAddNewUser(savedUserData)
    }
  }

  return (
    <div>
      <UserForm onSaveUserDada={saveUserDadaHandler}></UserForm>
    </div>
  )
}

export default NewUser
