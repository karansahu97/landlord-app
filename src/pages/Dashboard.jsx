import { TrendingUp, AlertCircle, CalendarClock } from 'lucide-react';
import Card from '../components/ui/Card';
import './Dashboard.css';

export default function Dashboard() {
    // Mock data for the dashboard
    const overviewStats = {
        totalIncome: '$4,250',
        pendingDues: '$850',
        upcomingPayments: '$1,200'
    };

    const propertyStats = [
        { id: 1, name: 'Sunset Apartments', income: '$2,400', pending: '$300', units: 4 },
        { id: 2, name: 'Oakwood House', income: '$1,850', pending: '$550', units: 2 },
    ];

    return (
        <div className="dashboard-container">
            <section className="dashboard-section">
                <h2 className="section-title">Overview</h2>
                <div className="stats-grid">

                    <Card className="stat-card success">
                        <div className="stat-header">
                            <span className="stat-label">Total Income</span>
                            <div className="stat-icon-wrapper success">
                                <TrendingUp size={18} />
                            </div>
                        </div>
                        <div className="stat-value">{overviewStats.totalIncome}</div>
                        <div className="stat-footer text-xs text-muted">This month</div>
                    </Card>

                    <Card className="stat-card error">
                        <div className="stat-header">
                            <span className="stat-label">Pending Dues</span>
                            <div className="stat-icon-wrapper error">
                                <AlertCircle size={18} />
                            </div>
                        </div>
                        <div className="stat-value">{overviewStats.pendingDues}</div>
                        <div className="stat-footer text-xs text-muted">2 tenants overdue</div>
                    </Card>

                    <Card className="stat-card primary">
                        <div className="stat-header">
                            <span className="stat-label">Upcoming</span>
                            <div className="stat-icon-wrapper primary">
                                <CalendarClock size={18} />
                            </div>
                        </div>
                        <div className="stat-value">{overviewStats.upcomingPayments}</div>
                        <div className="stat-footer text-xs text-muted">Next 7 days</div>
                    </Card>

                </div>
            </section>

            <section className="dashboard-section">
                <div className="section-header-row">
                    <h2 className="section-title">Properties Overview</h2>
                    <button className="text-btn text-sm">View All</button>
                </div>

                <div className="properties-list">
                    {propertyStats.map(prop => (
                        <Card key={prop.id} className="property-card">
                            <div className="prop-main-info">
                                <h3 className="prop-name">{prop.name}</h3>
                                <span className="prop-units text-xs text-muted">{prop.units} Units</span>
                            </div>
                            <div className="prop-financials">
                                <div className="prop-fin-item">
                                    <span className="text-xs text-muted">Income</span>
                                    <span className="text-sm fw-600 color-success">{prop.income}</span>
                                </div>
                                <div className="prop-fin-divider"></div>
                                <div className="prop-fin-item">
                                    <span className="text-xs text-muted">Pending</span>
                                    <span className="text-sm fw-600 color-error">{prop.pending}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
