import React from 'react';
import { AnchorButton } from '@blueprintjs/core';
import styles from './layoutsidebar.module.css';

interface Props {
  isOpen: boolean;
}

const LayoutSidebar:React.FC<Props> = (props: Props) => {
  const { isOpen } = props;
  return (
    <div className={[styles.sidebar, isOpen ? styles.open : ''].join(" ")}>
      <div
        style={{padding: 20}}
      >
        Header
      </div>
      <div className={styles.navigation}>
        <ul className={styles.sidebarlinks}>
          <li><AnchorButton minimal style={{color: 'white'}}>Home</AnchorButton></li>
          <li><AnchorButton minimal style={{color: 'white'}}>About</AnchorButton></li>
          <li><AnchorButton minimal style={{color: 'white'}}>Services</AnchorButton></li>
          <li><AnchorButton minimal style={{color: 'white'}}>Portfolio</AnchorButton></li>
          <li><AnchorButton minimal style={{color: 'white'}}>Contact</AnchorButton></li>
        </ul>
      </div>
    </div>
  );
};

export default LayoutSidebar;
