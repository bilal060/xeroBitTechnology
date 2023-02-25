import React, { ReactNode } from "react";
import AppHeader from "./header";
interface Props {
    children?: ReactNode
}
function MainLayout({ children}: Props) {
    return (
        <>
            <div className="layout-container">
                <AppHeader />
                <div className="main-content">
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainLayout;
