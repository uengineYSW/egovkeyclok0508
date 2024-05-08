import React from 'react';

import URL from 'constants/url';
import { NavLink } from 'react-router-dom';

function EgovLeftNavInform() { 
    const lastSegment = window.parent.location.href.split('/').pop();
    
    if (lastSegment === 'applications'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>민원</h2>
                    <ul className="menu4">
                        <li><NavLink to="/application/applications" className={({ isActive }) => (isActive ? "cur" : "")}>민원</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    if (lastSegment === 'investigations'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>사실조사</h2>
                    <ul className="menu4">
                        <li><NavLink to="/process1/investigations" className={({ isActive }) => (isActive ? "cur" : "")}>사실조사</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    if (lastSegment === 'processings'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>처리</h2>
                    <ul className="menu4">
                        <li><NavLink to="/process1/processings" className={({ isActive }) => (isActive ? "cur" : "")}>처리</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    if (lastSegment === 'analysis1s'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>분석관점1</h2>
                    <ul className="menu4">
                        <li><NavLink to="/analysis1/analysis1s" className={({ isActive }) => (isActive ? "cur" : "")}>분석관점1</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    return null;
}

export default React.memo(EgovLeftNavInform);