import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    <h1 className='text-3xl font-bold text-center mt-5'>Welcome to our Dashboard</h1>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {
                            !admin && <>
                                <li> <Link to='/dashboard'>My Orders</Link></li>
                                <li> <Link to='/dashboard/addreview'>Add a Review</Link></li>
                            </>
                        }
                        <li> <Link to='/dashboard/myprofile'>My Profile</Link></li>
                        {admin && <>
                            <li> <Link to='/dashboard/users'>Make Admin</Link></li>
                            <li> <Link to='/dashboard/manageallproducts'>Manage All Orders</Link></li>
                            <li> <Link to='/dashboard/addproduct'>Add a Product</Link></li>
                            <li> <Link to='/dashboard/manageproduct'>Manage Product</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;