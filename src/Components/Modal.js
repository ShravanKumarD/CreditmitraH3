"10px solid linear-gradient(, #a9e2ff, )"

import React from "react";
 
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
 
    return (
        <></>
        // <div
        //     onClick={onClose}
        //     style={{
        //         position: "fixed",
        //         top: 0,
        //         left: 0,
        //         width: "100%",
        //         height: "100%",
        //         background: "rgba(0, 0, 0, 0.5)",
        //         display: "flex",
        //         alignItems: "center",
        //         justifyContent: "center",
        //         zIndex:1000 
        //     }}
        // >
        //     <div
        //         style={{
        //             background: "grey",
        //             height: 300,
        //             width: 400,
        //             margin: "auto",
        //             padding: "2%",
        //             border: "2px solid #1b9bdc",
        //             borderRadius: "10px",
        //             boxShadow: "2px solid black",
        //         }}
        //     >
        //         {children}
        //     </div>
        // </div>
    );
};
 
export default Modal;