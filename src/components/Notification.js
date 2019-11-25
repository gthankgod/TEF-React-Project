import React from 'react'

const Notification = () => {
    return (
        <div className="notifications">
            <div className="d-flex">
                <div className="r-10 pt-1">NOTIFICATIONS</div>
                <div className="ml-auto"><a href="!#">Mark all as read</a></div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="note">
                        <div className="row">
                            <div className="col-2">
                                <i className="fas fa-check-circle" style={{ fontSize: '30px', color: '#5CC082' }} />
                            </div>
                            <div className="col-10">
                                <p className="c-10">Your Personal loan payoff of N2,000,000 has
                      been approved by HR<br />
                                    <small className="l-10">a day ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className="note">
                        <div className="row">
                            <div className="col-2">
                                <i className="fas fa-times-circle" style={{ fontSize: '30px', color: '#E31C1C' }} />
                            </div>
                            <div className="col-10">
                                <p className="c-10">Your Personal loan payoff of N2,000,000 has
                      been approved by HR<br />
                                    <small className="l-10">a day ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className>
                        <div className="row">
                            <div className="col-2">
                                <img src="img/ant-design_calendar-outline.png" alt="" height="30px" />
                            </div>
                            <div className="col-10">
                                <p className="c-10">Your Personal loan payoff of N2,000,000 has
                      been approved by HR<br />
                                    <small className="l-10">a day ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className>
                        <div className="row">
                            <div className="col-2">
                                <img src="img/ant-design_calendar-outline.png" alt="" height="30px" />
                            </div>
                            <div className="col-10">
                                <p className="c-10">Your Personal loan payoff of N2,000,000 has
                      been approved by HR<br />
                                    <small className="l-10">a day ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification;