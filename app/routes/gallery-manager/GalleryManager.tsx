// Page.tsx

import type { Route } from "../+types/home";
import React, { useState } from "react";
import MenuBar from "../../components/MenuBar/MenuBar";
import "./styles.css";
import ItemDialog from "../../components/Dialogs/ItemDialog/index";
import FindItemDialog from "../../components/Dialogs/FindItemDialog/index";
import ContactsDialog from "../../components/Dialogs/ContactDialog";
import TransactionsDialog from "~/components/Dialogs/TransactionsDialog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function GalleryManager() {
  const [isItemDialogOpen, setIsItemDialogOpen] = useState(false);
  const [isFindItemDialogOpen, setIsFindItemDialogOpen] = useState(false);
  const [isContactsDialogOpen, setIsContactsDialogOpen] = useState(false);
  // prettier-ignore
  const [isTransactionsDialogOpen, setIsTransactionsDialogOpen] = useState(false);

  const handleItemDialogOpen = () => {
    setIsItemDialogOpen(true);
  };

  const handleItemDialogClose = () => {
    console.log("handle Item close");
    setIsItemDialogOpen(false);
  };

  const handleFindItemDialogOpen = () => {
    setIsFindItemDialogOpen(true);
    console.log("find item dialog is open");
  };

  const handleFindItemDialogClose = () => {
    setIsFindItemDialogOpen(false);
  };

  const handleContactsDialogOpen = () => {
    setIsContactsDialogOpen(true);
  };
  const handleContactsDialogClose = () => {
    setIsContactsDialogOpen(false);
  };

  const handleTransactionsDialogOpen = () => {
    setIsTransactionsDialogOpen(true);
  };
  const handleTransactionsDialogClose = () => {
    setIsTransactionsDialogOpen(false);
  };

  return (
    <div>
      <div>
        <h1>Gallery Manager - Photography West Gallery </h1>
        <MenuBar
          onOpenItemDialog={handleItemDialogOpen}
          onOpenFindItemDialog={handleFindItemDialogOpen}
          onOpenContactsDialog={handleContactsDialogOpen}
          onOpenTransactionsDialog={handleTransactionsDialogOpen}
        />
      </div>
      <div className="gallery-content">
        <div className="icon-container">
          <div className="icon">
            <div className="outer-ellipse">
              <div className="inner-ellipse">
                <div className="ellipse"></div>
                <div className="rectangle"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-container">
          <h2>Navigation to the webpage was canceled</h2>
          <div className="divider"></div>
          <p>What you can try:</p>
          <ul>
            <li>
              <a href="#">Refresh this page</a>
            </li>
          </ul>
        </div>
      </div>
      {/* prettier-ignore */}
      <FindItemDialog isOpen={isFindItemDialogOpen} onClose={handleFindItemDialogClose} />
      <ItemDialog isOpen={isItemDialogOpen} onClose={handleItemDialogClose} />
      {/* prettier-ignore */}
      <ContactsDialog isOpen={isContactsDialogOpen} onClose={handleContactsDialogClose} />
      {/* prettier-ignore */}
      <TransactionsDialog isOpen={isTransactionsDialogOpen} onClose={handleTransactionsDialogClose} />
    </div>
  );
}
