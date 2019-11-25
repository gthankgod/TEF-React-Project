import React from 'react'

const PendingApprovalLoan = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mb-3 pr-0">
                    <div className="card shadow-x border-0 p-3 overflow-auto">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="r-12">PENDING APPROVAL LOANS</h4>
                            </div>
                            <div className="col-lg-11 mb-3">
                                <div className="border rounded w-103">
                                    <div className="row">
                                        <div className="col-sm-4 pr-0">
                                            <div className="p-2 border-right">
                                                <p className="c-12 m-0">Personal Loan: N200,000</p>
                                                <p className="m-0 c-9">Tenure: Jul. 2018 - Jun. 2020</p>
                                                <p className="rc-9 m-0">Awaiting Approval: CFO</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-8 pl-0">
                                            <ul className="progress-indicator">
                                                <li className="completed"> <span className="bubble" /> <p className="r-6"> Line 1</p></li>
                                                <li className="completed"> <span className="bubble" /> <p className="r-6"> Line 2</p></li>
                                                <li className="completed"> <span className="bubble" /><p className="r-6">HR</p></li>
                                                <li className="completed"> <span className="bubble" /> <p className="r-6">Audit</p> </li>
                                                <li className="completed"> <span className="bubble" /> <p className="r-6">CEO</p> </li>
                                                <li className="ongoing"> <span className="bubble" /> <p className="r-6">CFO</p></li>
                                                <li> <span className="bubble" /> <p className="r-6">Staff</p> </li>
                                                <li> <span className="bubble" /> <p className="r-6">Finance</p> </li>
                                                <li> <span className="bubble" /> <p className="r-6">Completed</p> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 mb-3 d-flex align-items-center">
                                <a href="!#">
                                    <i className="fas fa-times-circle" style={{ fontSize: '16px', color: '#E31C1C' }} />
                                </a>
                            </div>
                            <div className="col-lg-11">
                                <div className="border rounded w-103">
                                    <div className="row">
                                        <div className="col-sm-4 pr-0">
                                            <div className="p-2 border-right">
                                                <p className="c-12 m-0">Personal Loan: N200,000</p>
                                                <p className="m-0 c-9">Tenure: Jul. 2018 - Jun. 2020</p>
                                                <p className="rc-9 m-0">Awaiting Approval: CFO</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-8 pl-0">
                                            <ul className="progress-indicator">
                                                <li className="completed"> <span className="bubble" /> <p className="r-6"> Line 1</p></li>
                                                <li className="completed"> <span className="bubble" /> <p className="r-6"> Line 2</p></li>
                                                <li className="completed"> <span className="bubble" /><p className="r-6">HR</p></li>
                                                <li className="completed"> <span className="bubble" /> <p className="r-6">Audit</p> </li>
                                                <li className="completed"> <span className="bubble" /> <p className="r-6">CEO</p> </li>
                                                <li className="ongoing"> <span className="bubble" /> <p className="r-6">CFO</p></li>
                                                <li> <span className="bubble" /> <p className="r-6">Staff</p> </li>
                                                <li> <span className="bubble" /> <p className="r-6">Finance</p> </li>
                                                <li> <span className="bubble" /> <p className="r-6">Completed</p> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 mb-3 d-flex align-items-center">
                                <a href="!#">
                                    <i className="fas fa-times-circle" style={{ fontSize: '16px', color: '#E31C1C' }} />
                                </a>
                            </div>
                            <div className="col-12 mt-2 text-right">
                                <a href="!#" className="r-9" data-toggle="modal" data-target="#pending">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingApprovalLoan;
