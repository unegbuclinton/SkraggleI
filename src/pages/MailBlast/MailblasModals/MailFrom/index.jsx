import Modal from 'components/layouts/Modal'
import MailFrom from 'components/molecules/MailblastModalComponents/MailFron'
import React from 'react'

function MailFromModal() {
  return (
    <Modal header='From' isShown>
        <MailFrom />
    </Modal>
  )
}

export default MailFromModal