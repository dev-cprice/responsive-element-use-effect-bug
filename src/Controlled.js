import React from "react";
import ResponsiveElement from "terra-responsive-element";
import Button from "terra-button";

function Large() {
  const titleRef = React.useRef(null);
  const [titleFocusedProperly, setTitleFocusedProperly] = React.useState(false);

  React.useEffect(() => {
    const { current: title } = titleRef;

    if (title) {
      title.focus();
      setTitleFocusedProperly(true);
    } else {
      console.warn("Controlled: Couldn't focus on the large title...");
      setTitleFocusedProperly(false);
    }
  }, []);

  return (
    <div>
      <p>Title focused properly? {titleFocusedProperly.toString()}</p>
      <span tabIndex="0" ref={titleRef}>
        Large Title Here
      </span>
      <p>Large Content Here</p>
      <Button text="Focusable Button" />
    </div>
  );
}

function Tiny() {
  const titleRef = React.useRef(null);
  const [titleFocusedProperly, setTitleFocusedProperly] = React.useState(false);

  React.useEffect(() => {
    const { current: title } = titleRef;

    if (title) {
      title.focus();
      setTitleFocusedProperly(true);
    } else {
      console.warn("Controlled: Couldn't focus on the tiny title...");
      setTitleFocusedProperly(false);
    }
  }, []);

  return (
    <div>
      <p>Title focused properly? {titleFocusedProperly.toString()}</p>
      <span tabIndex="0" ref={titleRef}>
        Tiny Title Here
      </span>
      <p>Tiny Content Here</p>
      <Button text="Focusable Button" />
    </div>
  );
}

export default function Controlled() {
  const [activeBreakpoint, setActiveBreakpoint] = React.useState("");

  const content = React.useMemo(() => {
    switch (activeBreakpoint) {
      case "large":
      case "huge":
      case "enormous":
        return <Large />;
      default:
        return <Tiny />;
    }
  }, [activeBreakpoint]);

  const onChange = React.useCallback(value => setActiveBreakpoint(value), []);

  return (
    <div>
      <h1>Controlled</h1>
      <ResponsiveElement responsiveTo="window" onChange={onChange}>
        {content}
      </ResponsiveElement>
    </div>
  );
}
