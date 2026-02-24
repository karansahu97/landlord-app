import { Send, Users, Megaphone, Search, User } from 'lucide-react';
import Card from '../components/ui/Card';
import './Messages.css';

export default function Messages() {
    const messageGroups = [
        { id: 'g1', name: 'All Tenants', type: 'Announcement', icon: Megaphone, time: '10:30 AM', unread: 0, preview: 'Scheduled maintenance for block A...' },
        { id: 'g2', name: 'Sunset Apartments', type: 'Group', icon: Users, time: 'Yesterday', unread: 2, preview: 'Water supply issue resolved.' },
    ];

    const directMessages = [
        { id: 'd1', name: 'John Doe', unit: 'Flat 101', type: 'Direct', icon: User, time: 'Yesterday', unread: 0, preview: 'Thanks for the update.' },
        { id: 'd2', name: 'Mike Johnson', unit: 'Ground Floor', type: 'Direct', icon: User, time: 'Mon', unread: 1, preview: 'When can I expect the plumber?' },
    ];

    return (
        <div className="messages-container">
            <div className="messages-sidebar">
                <div className="messages-header">
                    <div className="search-bar-wrapper">
                        <Search size={18} className="text-muted search-icon-left" />
                        <input type="text" placeholder="Search chats..." className="search-input with-icon" />
                    </div>
                </div>

                <div className="messages-list">
                    <div className="msg-section-title text-xs text-muted">Broadcasts & Groups</div>
                    {messageGroups.map(chat => {
                        const Icon = chat.icon;
                        return (
                            <div key={chat.id} className="chat-list-item">
                                <div className="chat-avatar broadcast">
                                    <Icon size={20} />
                                </div>
                                <div className="chat-info">
                                    <div className="chat-header-row">
                                        <span className="chat-name fw-600">{chat.name}</span>
                                        <span className="chat-time text-xs text-muted">{chat.time}</span>
                                    </div>
                                    <div className="chat-preview-row">
                                        <span className="chat-preview text-sm text-muted">{chat.preview}</span>
                                        {chat.unread > 0 && <span className="unread-badge">{chat.unread}</span>}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <div className="msg-section-title text-xs text-muted mt-4">Direct Messages</div>
                    {directMessages.map(chat => {
                        const Icon = chat.icon;
                        return (
                            <div key={chat.id} className="chat-list-item">
                                <div className="chat-avatar direct">
                                    <Icon size={20} />
                                </div>
                                <div className="chat-info">
                                    <div className="chat-header-row">
                                        <span className="chat-name fw-600">{chat.name}</span>
                                        <span className="chat-time text-xs text-muted">{chat.time}</span>
                                    </div>
                                    <div className="chat-preview-row">
                                        <span className="chat-preview text-sm text-muted">{chat.preview}</span>
                                        {chat.unread > 0 && <span className="unread-badge">{chat.unread}</span>}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Card className="messages-view-area hidden-mobile">
                <div className="empty-chat-state">
                    <Send size={48} className="text-muted mb-2 opacity-50" />
                    <h3 className="empty-title">Select a conversation</h3>
                    <p className="empty-subtitle text-muted text-sm">Choose an existing conversation or start a new broadcast</p>
                    <button className="btn-primary mt-4">New Message</button>
                </div>
            </Card>

            {/* Mobile-only FAB */}
            <button className="fab-mobile show-mobile">
                <Send size={20} />
            </button>

        </div>
    );
}
