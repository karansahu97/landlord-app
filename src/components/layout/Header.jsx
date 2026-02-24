import { UserCircle, Bell } from 'lucide-react';
import './Header.css';

export default function Header({ title }) {
    return (
        <header className="app-header">
            <div className="header-content">
                <h1 className="header-title">{title}</h1>
                <div className="header-actions">
                    <button className="icon-btn" aria-label="Notifications">
                        <Bell size={24} />
                        <span className="notification-dot"></span>
                    </button>
                    <button className="icon-btn" aria-label="Profile">
                        <UserCircle size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}
