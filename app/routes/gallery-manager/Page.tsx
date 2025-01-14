import type { Route } from "../+types/home";
import MenuBar from "../../components/MenuBar/MenuBar";
import "./Styles.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function GalleryManager() {
  return (
    <div>
      <div>
        <h1>Gallery Manager - Photography West Gallery </h1>
        <MenuBar />
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
    </div>
  );
}
