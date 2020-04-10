import React from "react";

export interface NavigationAttributes {}
type SettingsProps = NavigationAttributes;

const Settings = (props: SettingsProps) => {
  return (
    <div>
      <h1>Settings</h1>
      <p>Adjust configurations here</p>
    </div>
  );
};

export default Settings;
