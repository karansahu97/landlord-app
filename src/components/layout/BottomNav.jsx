import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Home, CircleDollarSign, MessageSquare } from 'lucide-react';
import './BottomNav.css';

export default function BottomNav() {
    const navItems = [
        { path: '/', label: 'Overview', icon: LayoutDashboard },
        { path: '/properties', label: 'Properties', icon: Home },
        { path: '/financials', label: 'Financials', icon: CircleDollarSign },
        { path: '/messages', label: 'Messages', icon: MessageSquare },
    ];

    return (
        <nav className="bottom-nav">
            <div className="nav-container">
                {navItems.map((item) => {
                    const IconStyle = item.icon;
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            <IconStyle className="nav-icon" size={24} />
                            <span className="nav-label">{item.label}</span>
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
}
