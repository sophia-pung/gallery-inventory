import "./MenuBar.css";
import React, { useState, type JSX } from "react";

interface MenuItem {
  label: string;
  hasSubmenu?: boolean;
  shortcut?: string;
  underlineIndex?: number;
  submenuItems?: MenuItem[];
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
    submenuItems: [{ label: "Item" }, { label: "Titles" }],
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
  { label: "Undo" },
  { label: "Redo" },
  { label: "Cut" },
  { label: "Copy" },
  { label: "Paste" },
];

const listsMenuItems: MenuItem[] = [
  { label: "Customers" },
  { label: "Vendors" },
  { label: "Items" },
];

const printMenuItems: MenuItem[] = [
  { label: "Print Preview" },
  { label: "Print..." },
];

const toolsMenuItems: MenuItem[] = [
  { label: "Options" },
  { label: "Customize" },
];

const menuConfigs: Record<string, MenuConfig> = {
  File: {
    items: fileMenuItems,
    separatorPositions: [1, 4, 6, 18, 20, 24, 27, 29],
  },
  Edit: {
    items: editMenuItems,
    separatorPositions: [],
  },
  Lists: {
    items: listsMenuItems,
    separatorPositions: [],
  },
  Print: {
    items: printMenuItems,
    separatorPositions: [],
  },
  Tools: {
    items: toolsMenuItems,
    separatorPositions: [],
  },
};

const FileDropdown = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
    setActiveSubmenu(null);
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
            <div
              className={`submenu-button ${
                activeSubmenu === item.label ? "active" : ""
              }`}
              onClick={() => toggleSubmenu(item.label)}
            >
              <span>{renderLabel(item)}</span>
              <span className="submenu-indicator">►</span>
            </div>
            {activeSubmenu === item.label && (
              <ul className="submenu">
                {item.submenuItems?.map((subItem) => (
                  <li key={subItem.label} className="menu-item-content">
                    <span>{renderLabel(item)}</span>
                    {subItem.shortcut && (
                      <span className="shortcut">{subItem.shortcut}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      } else {
        menu.push(
          <li className="dropdown-menu-item">
            <div className="menu-item-content">
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

export default FileDropdown;
