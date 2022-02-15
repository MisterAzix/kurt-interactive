import React, { createContext, useContext, useMemo, useState } from "react";

const InventoryContext = createContext();

export default function InventoryWrapper({ children }) {
    const [inventory, setInventory] = useState([]);
    const value = useMemo(
        () => ({ inventory, setInventory }),
        [inventory]
    );

    return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>;
}

export function useInventoryContext() {
    return useContext(InventoryContext);
}
