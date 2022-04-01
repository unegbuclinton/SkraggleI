import Modal from 'components/layouts/Modal'
import EditMailBlast from 'components/molecules/MailblastModalComponents/EditmailBlast'
import React from 'react'

function EditMailModal() {
  return (
    <Modal header='Edit Mail Blasts'isShown>
        <EditMailBlast />
    </Modal>
  )
}

export default EditMailModal