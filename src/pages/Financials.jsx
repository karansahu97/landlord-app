import { Filter, Download, DollarSign, Zap, Droplet, CheckCircle2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import './Financials.css';

export default function Financials() {
    const transactions = [
        { id: 1, tenant: 'John Doe', unit: 'Flat 101', type: 'Rent', amount: '$600', date: 'Oct 1, 2023', status: 'Paid', icon: DollarSign },
        { id: 2, tenant: 'John Doe', unit: 'Flat 101', type: 'Electricity', amount: '$45', date: 'Oct 5, 2023', status: 'Pending', icon: Zap },
        { id: 3, tenant: 'Jane Smith', unit: 'Flat 102', type: 'Rent', amount: '$600', date: 'Oct 1, 2023', status: 'Overdue', icon: DollarSign },
        { id: 4, tenant: 'Mike Johnson', unit: 'Ground Floor', type: 'Water', amount: '$30', date: 'Sep 28, 2023', status: 'Paid', icon: Droplet },
        { id: 5, tenant: 'Mike Johnson', unit: 'Ground Floor', type: 'Security Deposit', amount: '$1,850', date: 'Sep 1, 2023', status: 'Paid', icon: CheckCircle2 },
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Paid': return 'success';
            case 'Pending': return 'warning';
            case 'Overdue': return 'error';
            default: return 'default';
        }
    };

    return (
        <div className="financials-container">
            <div className="page-header-actions">
                <div className="search-bar-wrapper">
                    <input type="text" placeholder="Search transactions..." className="search-input" />
                </div>
                <div className="action-buttons">
                    <button className="icon-btn-outline"><Filter size={18} /></button>
                    <button className="icon-btn-outline"><Download size={18} /></button>
                </div>
            </div>

            <div className="summary-cards">
                <Card className="summary-card">
                    <div className="summary-title text-muted text-sm">Total Collected</div>
                    <div className="summary-value color-success fw-700">$2,480</div>
                </Card>
                <Card className="summary-card">
                    <div className="summary-title text-muted text-sm">Outstanding</div>
                    <div className="summary-value color-error fw-700">$645</div>
                </Card>
            </div>

            <Card className="transactions-card">
                <div className="card-header border-bottom">
                    <h2 className="card-title font-lg">Recent Transactions</h2>
                </div>

                <div className="transaction-list">
                    {transactions.map(tx => {
                        const Icon = tx.icon;
                        return (
                            <div key={tx.id} className="transaction-item">
                                <div className="tx-icon-wrapper">
                                    <Icon size={20} className="tx-icon text-muted" />
                                </div>

                                <div className="tx-details">
                                    <div className="tx-primary-row">
                                        <span className="tx-type fw-600">{tx.type}</span>
                                        <span className="tx-amount fw-600">{tx.amount}</span>
                                    </div>

                                    <div className="tx-secondary-row">
                                        <span className="tx-meta text-xs text-muted">
                                            {tx.tenant} • {tx.unit}
                                        </span>
                                        <span className="tx-date text-xs text-muted">{tx.date}</span>
                                    </div>

                                    <div className="tx-status-row">
                                        <Badge variant={getStatusBadge(tx.status)}>{tx.status}</Badge>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>
        </div>
    );
}
