import { useEffect, useState } from 'react';
import './App.scss';

// pages/Dashboard.jsx
import AppTile from '../components/AppTile';
import { appSections } from '../data/apps';
import { useNavigate } from 'react-router-dom'; // if using react-router

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="Dashboard">
            {appSections.map((section, idx) => (
                <div key={idx} className="app-sections">
                    <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                    <hr className="mb-4" />
                    <div className="app-list flex flex-wrap gap-6">
                        {section.apps.map((app, i) => (
                            <AppTile
                                key={i}
                                name={app.name}
                                icon={app.icon}
                                onClick={() => navigate(app.link)}
                                colorCode={app.colorCode}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
