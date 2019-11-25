import React from 'react'
import SidebarList from './Sidebar/SidebarList'

const Sidebar = () => {
    return (
        <div id="sidebar-wrapper">
            <div className="sidebar-heading mx-3 dash-ic"><img src="http://hib.hh-converge.com/Converge-vF/img/Group.png" alt="" /> Dashboard</div>
            <ul className="list-unstyled components mt-3 p-2">
                <li className="nav-item mb-2">
                    <a href="#homeSubmenu">
                        <i className="fas fa-users-cog mr-3" style={{ opacity: 0 }} />
                        <span>Help</span>
                    </a>
                </li>
                <SidebarList value="Self Service" image="http://hib.hh-converge.com/Converge-vF/img/fa-solid_users-cog (2).png" link="index.html" />
                <SidebarList value="Loan Approval" image="http://hib.hh-converge.com/Converge-vF/img/Group (2).png" link="approval.html" />
                <SidebarList value="HR" image="http://hib.hh-converge.com/Converge-vF/img/ic-baseline-account-circle (2).png" link="hr.html" />
                <SidebarList value="Settings" image="http://hib.hh-converge.com/Converge-vF/img/feather-settings (2).png" link="loansettings.html" />
                <li className="nav-item mb-2">
                    <a href="!#">
                        <i className="fas fa-info-circle text-white mr-3" />
                        <span> Report</span>
                    </a>
                </li>
            </ul>
            <div className="col-12">
                <a className="btn btn-link a-l" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Toggle calender
              </a>
                <div className="collapse" id="collapseExample">
                    <div id="calendar" className="m-auto" style={{ width: '14rem' }} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;