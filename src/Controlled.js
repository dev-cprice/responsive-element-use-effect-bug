import React from "react";
import ResponsiveElement from "terra-responsive-element";
import Button from "terra-button";

export default function Controlled() {
  const titleRef = React.useRef(null);
  const [titleFocusedProperly, setTitleFocusedProperly] = React.useState(false);
  const [activeBreakpoint, setActiveBreakpoint] = React.useState("");

  React.useEffect(() => {
    const { current: title } = titleRef;

    if (title) {
      title.focus();
      setTitleFocusedProperly(true);
    } else {
      console.warn("Controlled: Couldn't focus on the title...");
      setTitleFocusedProperly(false);
    }
  }, []);

  const large = (
    <div>
      <span tabIndex="0" ref={titleRef}>
        Large Title Here
      </span>
      <p>Large Content Here</p>
      <Button text="Focusable Button" />
    </div>
  );

  const tiny = (
    <div>
      <span tabIndex="0" ref={titleRef}>
        Tiny Title Here
      </span>
      <p>Tiny Content Here</p>
      <Button text="Focusable Button" />
    </div>
  );

  const content = React.useMemo(() => {
    switch (activeBreakpoint) {
      case "large":
      case "huge":
      case "enormous":
        return large;
      default:
        return tiny;
    }
  }, [activeBreakpoint, large, tiny]);

  const onChange = React.useCallback(value => setActiveBreakpoint(value), []);

  return (
    <div>
      <h1>Controlled</h1>
      <p>Title focused properly? {titleFocusedProperly.toString()}</p>
      <ResponsiveElement responsiveTo="window" onChange={onChange}>
        {content}
      </ResponsiveElement>
    </div>
  );
}
