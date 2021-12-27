import React from 'react'

import styles from './ErrorModal.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'

const ErrorModal = (props) => {
  const content = props.validMassage

  const clickHandler = () => {
    props.onCloseErrorModal()
  }

  return (
    <div>
      <div className={styles.backdrop} onClick={clickHandler} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid input</h2>
        </header>
        <main className={styles.content}>
          <p>{content}</p>
        </main>
        <footer className={styles.actions}>
          <Button type="button" onClick={clickHandler}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal
