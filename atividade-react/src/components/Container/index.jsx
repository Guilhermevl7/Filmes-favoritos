import React from "react";

export default function Container ({ children, styles }) {
    return (
        <body style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            height: "100%",
            margin: "auto",
        
        }}>
        <div style={{
            width: "90%",
            backgroundColor: "#353434",
            padding: "20px",
            margin: "20px",
            borderRadius: "50px",
            color: "white",
            ...styles,
        }}>
            {children}
            </div>    
        </body>
    );
}