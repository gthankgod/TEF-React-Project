import React from 'react'

const ModalApproval = () => {
    return (
        <div className="modal fade" id="approval" tabIndex={-1} role="dialog" aria-labelledby="approvalmodal" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content py-5 px-3">
                    <p className="text-center">
                        <i className="fas fa-check-circle" style={{ fontSize: '30px', color: '#5CC082' }} />
                    </p>
                    <p className="m-0 r-14 text-center">
                        Loan Payoff Approval
              </p>
                    <p className="m-0 r-12 text-center">
                        Order: HR, Finance
              </p>
                </div>
            </div>
        </div>
    )
}

export default ModalApproval
