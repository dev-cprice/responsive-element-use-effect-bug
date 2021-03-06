import React from "react";
import ResponsiveElement from "terra-responsive-element";
import Button from "terra-button";

export default function Uncontrolled() {
  const titleRef = React.useRef(null);
  const [titleFocusedProperly, setTitleFocusedProperly] = React.useState(false);

  React.useEffect(() => {
    const { current: title } = titleRef;

    if (title) {
      title.focus();
      setTitleFocusedProperly(true);
    } else {
      console.warn("Uncontrolled: Couldn't focus on the title...");
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

  return (
    <div>
      <h1>Uncontrolled</h1>
      <p>Title focused properly? {titleFocusedProperly.toString()}</p>
      <ResponsiveElement responsiveTo="window" tiny={tiny} large={large} />
    </div>
  );
}
