import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

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
