import Modal from 'components/layouts/Modal'
import UnsubscribeWarning from 'components/molecules/MailblastModalComponents/UnsubscribeWarning'
import React from 'react'

function UnsubscribeWarningModal({isShown, onCloseModal}) {
  return (
   <Modal header='Confirm Unsubscribe' isShown={isShown} hide={onCloseModal} contrast plain>
      <UnsubscribeWarning onCloseModal={onCloseModal}/>
   </Modal>
  )
}

export default UnsubscribeWarningModal