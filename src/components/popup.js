import React from "react";
import ReactDOM from "react-dom";
import { noop } from "lodash";

const Popup = (props) => {
    const { open = false, setOpen = noop, content = {} } = props;
    const { heading = "", text = "" } = content;

    if (open) {
        return ReactDOM.createPortal(
            <>
                <div className='popup-wrapper'>
                    <section className='popup-content'>
                        <div className='cross' onClick={() => setOpen(false)} />
                        <h3>{heading}</h3>
                        <p>{text}</p>
                    </section>
                </div>
            </>,
            document.getElementById("portal")
        );
    }
};

export default Popup;
