import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, i) => (
          <Tab
            tab={tab}
            selectedTab={props.selectedTab}
            selectTabHandler={props.selectTabHandler}
            key={`tab-${i}`}
          />
        ))}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
