import React from "react";
import Base from "terra-base";
import ResponsiveElement from "terra-responsive-element";
import Button from "terra-button";
import "./App.css";

function App() {
  const titleRef = React.useRef(null);
  const [
    uncontrolledTitleFocusedProperly,
    setUncontrolledTitleFocusedProperly
  ] = React.useState(false);
  const [
    controlledTitleFocusedProperly,
    setControlledTitleFocusedProperly
  ] = React.useState(false);
  const [useControlled, setUseControlled] = React.useState(false);
  const [breakpoint, setBreakpoint] = React.useState("");

  React.useEffect(() => {
    const { current: title } = titleRef;

    if (title) {
      title.focus();
      if (useControlled) {
        setControlledTitleFocusedProperly(true);
      } else {
        setUncontrolledTitleFocusedProperly(true);
      }
    } else {
      console.warn("Couldn't focus on the title...");
      if (useControlled) {
        setControlledTitleFocusedProperly(false);
      } else {
        setUncontrolledTitleFocusedProperly(false);
      }
    }
  }, [useControlled]);

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

  const onChange = React.useCallback(value => setBreakpoint(value), []);

  return (
    <Base locale="en">
      <label htmlFor="use-controlled-checkbox">
        Use Controlled Responsive Element?
      </label>
      <input
        id="use-controlled-checkbox"
        type="checkbox"
        checked={useControlled}
        onChange={e => setUseControlled(e.target.checked)}
      />
      {useControlled ? (
        <div>
          <p>
            Title focused properly? {controlledTitleFocusedProperly.toString()}
          </p>
          <p>Breakpoint: {breakpoint}</p>
          <ResponsiveElement
            onChange={onChange}
            responsiveTo="window"
            tiny={tiny}
            large={large}
          />
        </div>
      ) : (
        <div>
          <p>
            Title focused properly?{" "}
            {uncontrolledTitleFocusedProperly.toString()}
          </p>
          <ResponsiveElement responsiveTo="window" tiny={tiny} large={large} />
        </div>
      )}
    </Base>
  );
}

export default App;
