import React from 'react'
import RunningLoans from './Loans/RunningLoans'

const TotalOutstandingLoan = () => {
    return (
        <div className="container-fluid mb-4">
            <div className="row mt-4 mb-3">
                <div className="col-md-8 col-sm-12">
                    <div className="whitebox py-4 px-4 mb-3 extend">
                        <div className="row">
                            <div className="col-12">
                                <p className="r-12">TOTAL OUTSTANDING LOAN</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="r-24 font-weight-bolder">4,250,182.30 <sup>NGN</sup> </p>
                            </div>
                            <div className="col-sm-6 text-right">
                                <button className="btn btn-green px-4" data-toggle="modal" data-target="#exampleModal">+ Request
                                Loan</button>
                            </div>
                            <div className="col-12 my-2">
                                <hr />
                            </div>
                            <div className="col-12">
                                <p className="r-12">RUNNING LOAN(S)</p>
                            </div>
                            <RunningLoans width="30%" amount="50,000" start="July 2018" tenor=" 23 months" end="May 2019" />
                            <RunningLoans width="60%" amount="250,000" start="July 2015" tenor=" 26 months" end="May 2019" />
                            <RunningLoans width="90%" amount="150,000" start="July 2016" tenor=" 13 months" end="May 2019" />
                            <div className="col-12 text-right">
                                <a href="!#" className="r-9" data-toggle="modal" data-target="#running"> View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 px-lg-0 d-flex-x">
                    <div className="h-48 mb-auto">
                        <div className="whitebox px-3 py-2 h-100">
                            <div className="row mt-2">
                                <div className="col-sm-8 col-8">
                                    <p className="r-12">LOAN STATUS</p>
                                </div>
                                <div className="col-sm-4 col-4">
                                    <img src="http://hib.hh-converge.com/Converge-vF/img/Group 11 (1).png" alt="" />
                                </div>
                                <div className="col-sm-8 col-8">
                                    <p className="r-9 m-0">LOAN TYPE</p>
                                    <p className="r-9 m-0">Rent</p>
                                </div>
                                <div className="col-sm-4 col-4">
                                    <p className="r-7 m-0" style={{ color: '#849AD2' }}>STATUS</p>
                                </div>
                                <div className="col-sm-8 col-8">
                                    <p className="r-14 m-0">200,000.00 <sup>NGN</sup> </p>
                                    <div className="d-flex w-100">
                                        <p className="r-9 w-45 mb-0 text-danger">Jul - 2018</p>
                                        <p className="r-9 mb-0 text-success">Jun - 2020</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-4">
                                    <p className="r-9 m-0">Finance</p>
                                </div>
                                <div className="col-12">
                                    <hr className="hr-x" />
                                    <p className="m-0 r-9">Personal Loan</p>
                                </div>
                                <div className="col-sm-8 col-8">
                                    <p className="m-0 r-14">200,000.00 <sup>NGN</sup> </p>
                                    <div className="d-flex w-100">
                                        <p className="r-9 w-45 mb-0 text-danger">Jul - 2018</p>
                                        <p className="r-9 mb-0 text-success">Jun - 2020</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-4">
                                    <small className="r-9">Finance</small>
                                </div>
                                <div className="col-12 text-right">
                                    <a href="!#" className="r-9" data-toggle="modal" data-target="#existing">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-48">
                        <div className="whitebox px-3 py-2 h-100">
                            <div className="row mt-2">
                                <div className="col-sm-8 col-8">
                                    <p className="r-12">LOAN PAYOFF</p>
                                </div>
                                <div className="col-sm-4 col-4">
                                    <img src="http://hib.hh-converge.com/Converge-vF/img/Group 11.png" alt="" />
                                </div>
                                <div className="col-sm-8 col-8 mt-2">
                                    <p className="r-8 m-0">Rent</p>
                                </div>
                                <div className="col-sm-4 col-4">
                                    <p className="r-7 m-0" style={{ color: '#849AD2' }}>STATUS</p>
                                </div>
                                <div className="col-sm-8 col-8">
                                    <p className="r-14 m-0">200,000.00 <sup>NGN</sup> </p>
                                </div>
                                <div className="col-sm-4 col-4">
                                    <p className="r-9 m-0">FINCON</p>
                                </div>
                                <div className="col-12">
                                    <hr className="hr-x" />
                                    <p className="m-0 r-8">Personal Loan</p>
                                </div>
                                <div className="col-sm-8 col-8">
                                    <p className="m-0 r-14">200,000.00 <sup>NGN</sup> </p>
                                </div>
                                <div className="col-sm-4 col-4">
                                    <small className="r-9">HR</small>
                                </div>
                                <div className="col-12 text-right mt-2">
                                    <a href="!#" className="r-9" data-toggle="modal" data-target="#existing">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalOutstandingLoan;
