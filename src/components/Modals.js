import React, { Fragment } from 'react';
import ModalPayoff from './ModalPayoff';
import ModalRequest from './ModalRequest';
import ModalApproval from './ModalApproval';
import ModalLoanEligibilty from './ModalLoanEligibilty';
import ModalLoanSchedule from './ModalLoanSchedule';
import ModalLoanScedule2 from './ModalLoanScedule2';
import ModalRunningLoans from './ModalRunningLoans';
import ModalExistingLoans from './ModalExistingLoans';
import ModalLoanApproval from './ModalLoanApproval';

const Modals = () => {
    return (
        <Fragment>
            <ModalPayoff />
            <ModalRequest />
            <ModalApproval />
            <ModalLoanEligibilty />
            <ModalLoanSchedule />
            <ModalLoanScedule2 />
            <ModalRunningLoans />
            <ModalExistingLoans />
            <ModalLoanApproval />
        </Fragment>

    )
}

export default Modals
