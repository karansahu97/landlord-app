import { Plus, Building2, MapPin, Users } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import './Properties.css';

export default function Properties() {
    const properties = [
        {
            id: 1,
            name: 'Sunset Apartments',
            address: '123 Sunset Blvd, Sector 4',
            totalUnits: 4,
            occupiedUnits: 4,
            tenants: [
                { id: 101, unit: 'Flat 101', name: 'John Doe', status: 'Occupied', rent: '$600' },
                { id: 102, unit: 'Flat 102', name: 'Jane Smith', status: 'Occupied', rent: '$600' },
            ]
        },
        {
            id: 2,
            name: 'Oakwood House',
            address: '45 Oak Lane, Phase 2',
            totalUnits: 2,
            occupiedUnits: 1,
            tenants: [
                { id: 201, unit: 'Ground Floor', name: 'Mike Johnson', status: 'Occupied', rent: '$1,850' },
                { id: 202, unit: 'First Floor', name: 'Vacant', status: 'Vacant', rent: '-' },
            ]
        }
    ];

    return (
        <div className="properties-container">
            <div className="page-header-actions">
                <div className="search-bar-wrapper">
                    <input type="text" placeholder="Search properties or tenants..." className="search-input" />
                </div>
                <button className="btn-primary">
                    <Plus size={18} />
                    <span>Add</span>
                </button>
            </div>

            <div className="property-list">
                {properties.map(prop => (
                    <div key={prop.id} className="property-group">
                        <Card className="property-header-card">
                            <div className="prop-header-icon">
                                <Building2 size={24} className="color-primary" />
                            </div>
                            <div className="prop-header-info">
                                <h2 className="prop-header-title">{prop.name}</h2>
                                <div className="prop-header-meta text-xs text-muted">
                                    <span className="flex-center gap-1"><MapPin size={12} /> {prop.address}</span>
                                    <span className="meta-divider">•</span>
                                    <span className="flex-center gap-1"><Users size={12} /> {prop.occupiedUnits}/{prop.totalUnits} Units</span>
                                </div>
                            </div>
                        </Card>

                        <div className="unit-list">
                            {prop.tenants.map(tenant => (
                                <Card key={tenant.id} className="unit-card">
                                    <div className="unit-main">
                                        <div className="unit-number font-sm fw-600">{tenant.unit}</div>
                                        <div className="tenant-name font-base">{tenant.name}</div>
                                    </div>
                                    <div className="unit-status-col">
                                        <Badge variant={tenant.status === 'Occupied' ? 'success' : 'warning'}>
                                            {tenant.status}
                                        </Badge>
                                        <div className="unit-rent text-sm fw-600 mt-1">{tenant.rent}</div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
