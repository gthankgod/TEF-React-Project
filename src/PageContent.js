import React from 'react';
import TotalOutstandingLoan from './components/totalOutstandingLoan';
import PendingApprovalLoan from './components/PendingApprovalLoan';
import Notification from './components/Notification';
import Navbar from './components/Navbar';


const PageContent = () => {
    return (
        <div id="page-content-wrapper">
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 col-sm-pull-8">
                        <TotalOutstandingLoan />
                        <PendingApprovalLoan />
                    </div>
                    <div className="col-sm-4 col-sm-push-4">
                        <div className="lightrectangle">
                            <div className="row">
                                <div className="col-12">
                                    <img src="http://hib.hh-converge.com/Converge-vF/img/guy.png" alt="" className="w-100 ad-img img-fluid" />
                                </div>
                                <div className="col-12 px-lg-4">
                                    <div className="px-3">
                                        <p className="text-right">
                                            <img src="http://hib.hh-converge.com/Converge-vF/img/guy.png" alt="" height="30px" style={{ marginBottom: '-20px' }} />
                                        </p>
                                    </div>
                                    <Notification />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageContent
