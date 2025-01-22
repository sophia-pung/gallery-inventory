// MenuBar.tsx

import "./MenuBar.css";
import React, { useState, type JSX } from "react";
import ItemDialog from "../Dialogs/ItemDialog";

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
    label: "Find...",
    hasSubmenu: true,
    underlineIndex: 0,
    submenuItems: [
      { label: "Find Item" },
      { label: "Find Title", underlineIndex: 5 },
      { label: "Find Contact", underlineIndex: 5, shortcut: "F8" },
      { label: "Find Transaction", underlineIndex: 8 },
      { label: "Find Costs", underlineIndex: 6 },
      { label: "Find Purchase", underlineIndex: 5 },
    ],
    separatorPositions: [2, 4, 5],
  },
  { label: "Item", shortcut: "F7" },
  { label: "Titles", underlineIndex: 0 },
  { label: "Contacts", underlineIndex: 0 },
  { label: "Transactions" },
  { label: "New Sale", underlineIndex: 4, shortcut: "F6" },
  { label: "New Return", underlineIndex: 4, shortcut: "F9" },
  { label: "New Approval" },
  { label: "Convert Approval" },
  { label: "New Quote", underlineIndex: 4 },
  { label: "Convert Quote" },
  { label: "New Lease", underlineIndex: 8 },
  { label: "Convert Lease" },
  { label: "Renew Lease" },
  { label: "Open Cash Drawer" },
  { label: "Costs", underlineIndex: 1 },
  { label: "Purchase Orders", underlineIndex: 0 },
  { label: "Purchase Returns", underlineIndex: 1 },
  { label: "Combine POs" },
  { label: "Staff..." },
  { label: "Time Cards", underlineIndex: 2 },
  { label: "Backup/Restore Data", underlineIndex: 1 },
  { label: "Exit", underlineIndex: 1, shortcut: "CTRL+F4" },
];

const editMenuItems: MenuItem[] = [
  { label: "Undo", underlineIndex: 0, shortcut: "CTRL+Z" },
  { label: "Redo", underlineIndex: 0, shortcut: "CTRL+R" },
  { label: "Cut", underlineIndex: 2, shortcut: "CTRL+X" },
  { label: "Copy", underlineIndex: 0, shortcut: "CTRL+C" },
  { label: "Paste", underlineIndex: 0, shortcut: "CTRL+V" },
  { label: "Clear", underlineIndex: 3 },
  { label: "Select All", underlineIndex: 2, shortcut: "CTRL+A" },
];

const listsMenuItems: MenuItem[] = [
  { label: "Art Categories", underlineIndex: 0 },
  { label: "Item Types/Mediums", underlineIndex: 0 },
  { label: "Payment Types", underlineIndex: 0 },
  { label: "Sales Tax", hasSubmenu: true, underlineIndex: 6 },
  { label: "Service Rates", underlineIndex: 8 },
  { label: "Stock Locations", underlineIndex: 6 },
  { label: "Membership Types", underlineIndex: 0 },
];

interface MenuBarProps {
  onOpenItemDialog: () => void;
  onOpenFindItemDialog: () => void;
}

const printMenuItems: MenuItem[] = [
  {
    label: "Item...",
    hasSubmenu: true,
    underlineIndex: 0,
  },
  {
    label: "Contact...",
    hasSubmenu: true,
    underlineIndex: 0,
  },
  { label: "Sales Reports", underlineIndex: 0 },
  { label: "Statements", underlineIndex: 5 },
  { label: "Approvals", underlineIndex: 0 },
  { label: "Credit Card Summary", underlineIndex: 9 },
  { label: "Layaways / Receivables", underlineIndex: 0 },
  { label: "Sales Tax Report", underlineIndex: 6 },
  { label: "Sales History", underlineIndex: 6 },
  { label: "Show Past Due Amounts" },
  { label: "Sales Stats" },
  {
    label: "Work Order...",
    hasSubmenu: true,
    underlineIndex: 0,
  },
  {
    label: "Purchases...",
    hasSubmenu: true,
    underlineIndex: 0,
  },
  {
    label: "Online...",
    hasSubmenu: true,
    underlineIndex: 1,
  },
  {
    label: "Staff...",
    hasSubmenu: true,
    underlineIndex: 1,
  },
  {
    label: "System...",
    hasSubmenu: true,
    underlineIndex: 1,
  },
  { label: "Show Builds" },
  { label: "Modify Reports" },
];

const toolsMenuItems: MenuItem[] = [
  { label: "Change Company Settings", underlineIndex: 15 },
  { label: "Change Screen Labels", underlineIndex: 14 },
  { label: "Change Operator", underlineIndex: 0, shortcut: "F2" },
  { label: "Change Directories", underlineIndex: 1 },
  { label: "Browse", underlineIndex: 3 },
  {
    label: "Modify...",
    hasSubmenu: true,
    underlineIndex: 0,
  },
  {
    label: "Data...",
    hasSubmenu: true,
    underlineIndex: 0,
  },
  { label: "Check Inventory", underlineIndex: 6 },
  { label: "Move Inventory", underlineIndex: 2 },
  { label: "Convert Images", underlineIndex: 8 },
  { label: "Update Prices" },
  { label: "Change Background" },
  { label: "Clear Windows" },
  { label: "Run a Support Script" },
];

const menuConfigs: Record<string, MenuConfig> = {
  File: {
    items: fileMenuItems,
    separatorPositions: [1, 4, 6, 18, 20, 24, 27, 29],
  },
  Edit: {
    items: editMenuItems,
    separatorPositions: [2],
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

const MenuBar = ({ onOpenItemDialog, onOpenFindItemDialog }: MenuBarProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isItemDialogOpen, setIsItemDialogOpen] = useState(true);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
    setActiveSubmenu(null);
  };

  const handleMenuItemClick = (itemLabel: string) => {
    if (itemLabel === "Item") {
      onOpenItemDialog();
    } else if (itemLabel === "Find Item") {
      onOpenFindItemDialog();
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
