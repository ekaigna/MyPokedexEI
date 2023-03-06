import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

//This component is used to show progress using animated progress bar. It receives label, 
//background color of bar, progress percentage(s) and bar color. It has possibility to show
//more than one percentage's fraction, however, in this project, only one is used.


const ProgressBar = ({
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      percentage: "0%",
      color: "white"
    }
  ]
}) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    //mapping of percentages
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map(item => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <div>
      <div className="progressLabel">{label}</div>
      <div
        className="progressVisualFull"
        style={{
          backgroundColor
        }}
      >
        {/* mapping and animating diferent percentages */}
        {visualParts.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: widths[index],
                backgroundColor: item.color
              }}
              className="progressVisualPart"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
