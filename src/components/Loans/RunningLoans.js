import React from 'react';

const RunningLoans = (props) => {
    const { width, amount, start, tenor, end } = props;
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-sm-1 col-1 pr-0">
                    <a href="!#" data-toggle="modal" data-target="#schedule"><i className="fas fa-plus-square"
                        style={{ color: '#c4c4c4' }}></i></a>
                </div>
                <div className="col-sm-10 col-9 pl-0">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: width }} aria-valuenow="40"
                            aria-valuemin="0" aria-valuemax="100">
                            <p className="h-100" style={{ lineHeight: '2.5rem' }}> Personal Loan({amount})</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="r-9">{start}</p>
                        <p className="r-9">Tenor -{tenor}</p>
                        <p className="r-9">{end}</p>
                    </div>
                </div>
                <div className="col-sm-1 col-1 px-0">
                    <a href="!#" data-toggle="modal" data-target="#payoff">
                        <img src="img/Group 11 (2).png" style={{ height: '17px' }} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RunningLoans;