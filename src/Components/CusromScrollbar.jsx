// CustomScrollbars.js
import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

const CustomScrollbars = ({ children }) => {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: "#4A90E2",
      borderRadius: "6px",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const renderTrack = ({ style, ...props }) => {
    const trackStyle = {
      backgroundColor: "#F1F1F1",
      borderRadius: "6px",
    };
    return <div style={{ ...style, ...trackStyle }} {...props} />;
  };

  return (
    <Scrollbars
      renderThumbVertical={renderThumb}
      renderTrackVertical={renderTrack}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbars;
