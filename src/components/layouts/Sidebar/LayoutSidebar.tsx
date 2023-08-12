import React from 'react';
import { AnchorButton, H3, Text, Icon } from '@blueprintjs/core';
import profileImg from '../../../assets/profile.jpg';
import { menudata } from './data';
import styles from './layoutsidebar.module.css';

interface Props {
  isOpen: boolean;
}

const LayoutSidebar:React.FC<Props> = (props: Props) => {
  const { isOpen } = props;
  const renderMenus = (menu:Menu[]) => {
    return menu.map((v)=>{
      return (
        <>
          <div className={styles.menuitem}>
            <div className={styles.leftbaritem}>&nbsp;</div>
            <div>
              <Icon
                className={styles.iconitem} 
                icon={v.icon}
              />
            </div>
            <AnchorButton
              minimal
              className={styles.buttonitem}
              style={{
                color: '#CED9E0',
                textAlign: 'left',
                marginLeft: 15,          
              }}
            >
              {v.name}
            </AnchorButton>
          </div>
        </>
      );
    });
  }
  return (
    <div className={[styles.sidebar, isOpen ? styles.open : ''].join(" ")}>
      <div className={styles.profile}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div className={styles.profilephoto}>
            <img 
              src={profileImg} 
              alt="Profile"  
            />
          </div>
        </div>
        <H3>John Doe</H3>
        <Text
          style={{
            fontSize: 16, 
            color: 'white',
          }}
        >
          Frontend Developer
        </Text>
      </div>
      <div>
        { renderMenus(menudata) }
      </div>
    </div>
  );
};

export default LayoutSidebar;
