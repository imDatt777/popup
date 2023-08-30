import React, { useState } from "react";
import Navbar from "./components/navbar";
import Popup from "./components/popup";
import "./components/style.scss";

function App() {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState({ heading: "", text: "" });

    return (
        <div className='App'>
            <Navbar setContent={setContent} setOpen={setOpen} />
            <Popup open={open} setOpen={setOpen} content={content} />
        </div>
    );
}

export default App;
