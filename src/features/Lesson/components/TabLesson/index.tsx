import React, {useState} from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useRouteMatch} from 'react-router-dom';
import {Tab} from "../ContentLessonTab";


const TabWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  border-bottom: 2px solid #dcdacb;
  height: 50px;

`

interface TabItemProp {
    active: boolean
}

const TabItem = styled.li<TabItemProp>`
  color: ${props => props.active === true ? '#000' : '#666'};
  height: 100%;
  margin-right: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    cursor: pointer;
    color: #000;
  }

`

interface TabLessonProp {
    currentTab: string,

    changeTab(key: string): void,

    tabs: Tab[]
}

function TabLesson(props: TabLessonProp) {
    const onClickTab = (key: string) => {
        props.changeTab(key);
    }

    const renderTabs = props.tabs.filter(tab => tab.isVisible).map(tab => {
        return (
            <TabItem
                active={tab.key === props.currentTab}
                onClick={() => onClickTab(tab.key)}
                key={tab.key}
            >
                {tab.name}
            </TabItem>
        )
    })

    return (
        <TabWrapper>
            {renderTabs}
        </TabWrapper>
    )
}

export default TabLesson;