// Page.tsx

import type { Route } from "../+types/home";
import React, { useState } from "react";
import MenuBar from "../../components/MenuBar/MenuBar";
import "./styles.css";
import ItemDialog from "../../components/Dialogs/ItemDialog/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function GalleryManager() {
  const [isItemDialogOpen, setIsItemDialogOpen] = useState(false);

  const handleItemDialogOpen = () => {
    setIsItemDialogOpen(true);
  };

  const handleItemDialogClose = () => {
    console.log("handle Item close");
    setIsItemDialogOpen(false);
  };

  // const toggleItemDialog = () => {
  //   setIsItemDialogOpen((prev) => !prev);
  // };

  return (
    <div>
      <div>
        <h1>Gallery Manager - Photography West Gallery </h1>
        <MenuBar onOpenItemDialog={handleItemDialogOpen} />
      </div>
      <div className="gallery-content">
        {/* Icon Section */}
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

        {/* Text Section */}
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
      <ItemDialog isOpen={isItemDialogOpen} onClose={handleItemDialogClose} />
    </div>
  );
}
