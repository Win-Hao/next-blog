import React from 'react';

const RoleLayout = ({children, modal}: { children: React.ReactNode, modal: React.ReactNode }) => {
    return (
        <div>
            {modal}
            {children}
        </div>
    );
};

export default RoleLayout;
