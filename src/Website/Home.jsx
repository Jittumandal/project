import React from "react";
import Recent_items from "./Recent_items";
import "./HomeStyle.css";
const Home = () => {
  return (
    <>
      <header className="css-17t02fm">
        <div className="css-1ihkopo">
          <div className="css-13azwyo">
            <div className="css-tctv7l">
              <h1 className="css-159p4b7">Learn to React Code</h1>
              <p className="css-1s44ra">
                The most popular front-end framework Rebuilt for React...
              </p>
              <div className="css-v4xx2e css-1k80xq8">
                <div className="css-1ezwgyu">
                  <a
                    className="css-1053yfl"
                    href="https://reactjs.org/"
                    target="_blank"
                  >
                    Get Started
                  </a>
                </div>

                <div className="css-1ezwgyu">
                  <a
                    className="css-1053yfl"
                    href="https://reactjs.org/tutorial/tutorial.html"
                    target="_blank"
                  >
                    Take Tutorial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Recent_items />
    </>
  );
};
export default Home;
