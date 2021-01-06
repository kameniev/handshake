import React from 'react';
import EyeIcon1 from 'assets/icons/eye-line-1.svg';
import EyeIcon2 from 'assets/icons/eye-line-2.svg';
import Search from 'assets/icons/search.svg';
import Ellipse from 'assets/icons/ellipse.svg';
import Connector from 'assets/icons/connector.svg';
import Insta from 'assets/icons/insta.svg';
import Settings from 'assets/icons/settings.svg';
import Profile from 'assets/icons/profile.svg';
import Cancel from 'assets/icons/cancel.svg';
import Handshake from 'assets/icons/handshake.svg';
import Arrow from 'assets/icons/arrow.svg';
import BigConnector from 'assets/icons/big-connector.svg';

const Icons = {
  EyeIcon1: EyeIcon1,
  EyeIcon2: EyeIcon2,
  Search: Search,
  Ellipse: Ellipse,
  Connector: Connector,
  Insta: Insta,
  Settings: Settings,
  Profile: Profile,
  Cancel: Cancel,
  Handshake: Handshake,
  Arrow: Arrow,
  BigConnector: BigConnector,
};

export type IconName = keyof typeof Icons;

type IconProps = {
  name: IconName;
  width?: number;
};

class Icon extends React.Component<IconProps> {
  render() {
    const SelectedIcon = Icons[this.props.name];

    return <SelectedIcon width={this.props.width} />;
  }
}

export default Icon;
