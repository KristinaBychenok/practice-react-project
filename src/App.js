import React, { useState } from 'react'

import UserList from './components/UserList/UserList'
import NewUser from './components/NewUser/NewUser'
import ErrorModal from './components/ErrorModal/ErrorModal'

function App() {
  const DUMMY_USERS_DATA = []

  const [userData, setUserData] = useState(DUMMY_USERS_DATA)
  const [isValid, setIsValid] = useState(true)
  const [validMassage, setValidMassage] = useState('')

  const addNewUserHandler = (savedUserData) => {
    setIsValid(true)

    setUserData((prevUserData) => {
      return [savedUserData, ...prevUserData]
    })
  }

  const validCheckHandler = (validCheckMassage) => {
    setValidMassage(validCheckMassage)
    setIsValid(false)
  }

  const closeErrorModalHandler = () => {
    setIsValid(true)
  }

  return (
    <div>
      <NewUser
        onAddNewUser={addNewUserHandler}
        onValidCheck={validCheckHandler}
      />
      <UserList userData={userData} />
      {!isValid && (
        <ErrorModal
          validMassage={validMassage}
          onCloseErrorModal={closeErrorModalHandler}
        />
      )}
    </div>
  )
}

export default App
