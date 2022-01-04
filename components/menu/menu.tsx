import { List, ListItem, ListItemText } from '@material-ui/core';
import React, { useState } from 'react'
import { StyledMenu, SubItem } from './styles';


function SideBarItem({label, items, depthStep = 10, depth = 0, ...rest}) {
  return (
    <>
      <ListItem button dense {...rest}>
        <ListItemText style={{paddingLeft: depth * depthStep}}>
          <SubItem>{label}</SubItem>
        </ListItemText>
      </ListItem>
      {Array.isArray(items) && (
        <List disablePadding dense>
          {items.map((subItem) => (
            <SideBarItem
              key={subItem.name}
              depth={depth+1}
              depthStep={depthStep}
              {...subItem}
            />
          ))}
        </List>
      )}
    </>  
  )
}

function SideBar({items, depthStep, depth, open}) {
  return (
    <StyledMenu open={open}>
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <SideBarItem 
            key={`${sidebarItem.name}${index}`}
            depthStep={depthStep}
            depth={depth}
            {...sidebarItem}
          />
        ))}
      </List>
    </StyledMenu>
  )
}

export default SideBar;