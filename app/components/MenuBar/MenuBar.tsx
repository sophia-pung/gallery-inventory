// MenuBar.tsx

import "./MenuBar.css";
import React, { useState, type JSX } from "react";

interface MenuItem {
  label: string;
  hasSubmenu?: boolean;
  shortcut?: string;
  underlineIndex?: number;
  submenuItems?: MenuItem[];
  separatorPositions?: number[];
}

interface MenuConfig {
  items: MenuItem[];
  separatorPositions: number[];
}

const fileMenuItems: MenuItem[] = [
  {
    label: "Find",
    hasSubmenu: true,
    underlineIndex: 0,
    submenuItems: [
      { label: "Find Item" },
      { label: "Find Contact", underlineIndex: 5 },
      { label: "Find Transaction", underlineIndex: 8 },
    ],
  },
  { label: "Item" },
  { label: "Contacts", underlineIndex: 0 },
  { label: "Transactions" },
  { label: "New Sale", underlineIndex: 4 },
  { label: "New Return", underlineIndex: 4 },
  { label: "Purchase Orders", underlineIndex: 0 },
  { label: "Purchase Return", underlineIndex: 1 },
  { label: "Staff List" },
];

const listsMenuItems: MenuItem[] = [
  { label: "Art Categories", underlineIndex: 0 },
  { label: "Item Types / Mediums", underlineIndex: 0 },
  { label: "Payment Types", underlineIndex: 0 },
  {
    label: "Salex Tax",
    hasSubmenu: true,
    underlineIndex: 6,
    submenuItems: [{ label: "Tax Types" }],
  },
  { label: "Stock Locations", underlineIndex: 6 },
];

interface MenuBarProps {
  onOpenItemDialog: () => void;
  onOpenFindItemDialog: () => void;
  onOpenContactsDialog: () => void;
  onOpenTransactionsDialog: () => void;
}

const printMenuItems: MenuItem[] = [
  {
    label: "Item...",
    hasSubmenu: true,
    underlineIndex: 0,
    submenuItems: [
      { label: "Certificate of Authentication / Appraisal", underlineIndex: 0 },
      { label: "Consignment Agreements", underlineIndex: 12 },
      { label: "Summary of Inventory", underlineIndex: 11 },
    ],
  },
  {
    label: "Contact",
    hasSubmenu: true,
    underlineIndex: 0,
    submenuItems: [
      { label: "Mailing Lists", underlineIndex: 1 },
      { label: "Top 20 Lists", underlineIndex: 0 },
    ],
  },
  {
    label: "Sales",
    hasSubmenu: true,
    underlineIndex: 0,
    submenuItems: [
      { label: "Sales Reports", underlineIndex: 0 },
      { label: "Sales Tax Report", underlineIndex: 6 },
    ],
  },
  {
    label: "Purchases",
    hasSubmenu: true,
    underlineIndex: 0,
    submenuItems: [{ label: "Artist Payables", underlineIndex: 7 }],
  },
  {
    label: "Staff",
    hasSubmenu: true,
    underlineIndex: 0,
    submenuItems: [{ label: "Staff Commissions", underlineIndex: 6 }],
  },
];
const toolsMenuItems: MenuItem[] = [
  {
    label: "Data...",
    hasSubmenu: true,
    underlineIndex: 0,
    submenuItems: [{ label: "Backup/Restore Data", underlineIndex: 0 }],
  },
];

const menuConfigs: Record<string, MenuConfig> = {
  File: {
    items: fileMenuItems,
    separatorPositions: [1, 4, 6, 18, 20, 24, 27, 29],
  },
  Lists: {
    items: listsMenuItems,
    separatorPositions: [],
  },
  Print: {
    items: printMenuItems,
    separatorPositions: [2, 12, 18],
  },
  Tools: {
    items: toolsMenuItems,
    separatorPositions: [],
  },
};

const MenuBar = ({
  onOpenItemDialog,
  onOpenFindItemDialog,
  onOpenContactsDialog,
  onOpenTransactionsDialog,
}: MenuBarProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
    setActiveSubmenu(null);
  };

  const handleMenuItemClick = (itemLabel: string) => {
    if (itemLabel === "Item") {
      onOpenItemDialog();
    } else if (itemLabel === "Find Item") {
      onOpenFindItemDialog();
    } else if (itemLabel === "Contacts") {
      onOpenContactsDialog();
    } else if (itemLabel === "Transactions") {
      console.log("transactions");
      onOpenTransactionsDialog();
    }
    setActiveMenu(null);
  };

  const toggleSubmenu = (submenuName: string) => {
    setActiveSubmenu(activeSubmenu === submenuName ? null : submenuName);
  };

  const renderMenuItems = (items: MenuItem[], menuName: string) => {
    const menu: JSX.Element[] = [];
    const { separatorPositions } = menuConfigs[menuName];

    items.forEach((item, index) => {
      if (separatorPositions.includes(menu.length)) {
        menu.push(
          <div key={`separator-${menu.length}`} className="menu-separator" />
        );
      }

      const renderLabel = (item: MenuItem) => {
        if (typeof item.underlineIndex === "number") {
          return (
            <>
              {item.label.slice(0, item.underlineIndex)}
              <u>{item.label[item.underlineIndex]}</u>
              {item.label.slice(item.underlineIndex + 1)}
            </>
          );
        }
        return item.label;
      };

      if (item.hasSubmenu) {
        menu.push(
          <li key={item.label} className="submenu-toggle">
            <button
              className={`submenu-button ${
                activeSubmenu === item.label ? "active" : ""
              }`}
              onClick={() => toggleSubmenu(item.label)}
            >
              <span>{renderLabel(item)}</span>
              <span className="submenu-indicator">►</span>
            </button>
            {activeSubmenu === item.label && (
              <ul className="submenu">
                {item.submenuItems?.map((subItem, subIndex) => (
                  <React.Fragment key={subIndex}>
                    {item.separatorPositions?.includes(subIndex) && (
                      <div className="menu-separator" />
                    )}
                    <li
                      key={subItem.label}
                      className="menu-item-content"
                      onClick={() => handleMenuItemClick(subItem.label)}
                    >
                      <span>{renderLabel(subItem)}</span>
                      {subItem.shortcut && (
                        <span className="shortcut">{subItem.shortcut}</span>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            )}
          </li>
        );
      } else {
        menu.push(
          <li className="dropdown-menu-item">
            <div
              className="menu-item-content"
              onClick={() => handleMenuItemClick(item.label)}
            >
              <span>{renderLabel(item)}</span>
              {item.shortcut && (
                <span className="shortcut">{item.shortcut}</span>
              )}
            </div>
          </li>
        );
      }
    });

    return menu;
  };

  return (
    <div className="file-dropdown">
      <div className="menu-bar">
        {Object.entries(menuConfigs).map(([menuName, config]) => (
          <div key={menuName} className="menu-item">
            <button
              className={`menu-button ${
                activeMenu === menuName ? "active" : ""
              }`}
              onClick={() => toggleMenu(menuName)}
            >
              {menuName}
            </button>
            {activeMenu === menuName && (
              <ul className="dropdown-menu">
                {renderMenuItems(config.items, menuName)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
