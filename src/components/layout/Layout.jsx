import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';

export default function Layout() {
    const location = useLocation();

    // Set title based on current route
    const getHeaderTitle = () => {
        switch (location.pathname) {
            case '/': return 'Dashboard';
            case '/properties': return 'Properties';
            case '/financials': return 'Financial Tracking';
            case '/messages': return 'Messages';
            default: return 'Landlord App';
        }
    };

    return (
        <div className="app-container">
            <Header title={getHeaderTitle()} />
            <main className="main-content">
                <Outlet />
            </main>
            <BottomNav />
        </div>
    );
}
