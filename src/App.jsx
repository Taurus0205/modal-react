import React, { useRef } from "react";

import "./App.scss";

// images
import MrBean from "./Assests/Images/english.jpg";
import ashamed from "./Assests/Images/ashamed.png";

function App() {
  const elModal = useRef(null);
  return (
    <>
      <div className="bored">
        <p className="bored__paragraph">
          Bored? Nothing to do? <br /> Wanna play something interesting? <br />{" "}
          Try this button...
        </p>
        <button
          className="bored__btn"
          type="button"
          onClick={() => {
            elModal.current.classList.add("modal--active");
          }}
        >
          Start PUBG
        </button>
      </div>

      <div className="modal" ref={elModal}>
        <div className="modal-inner">
          <img
            className="modal__img"
            src={MrBean}
            alt="Mr Bean"
            width={200}
            height={100}
          />
          <button
            className="modal__btn"
            onClick={() => {
              elModal.current.classList.remove("modal--active");
            }}
          >
            Oops. You got me
            <img
              className="modal__ashamed"
              src={ashamed}
              alt="ashamed"
              width={35}
              height={35}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
