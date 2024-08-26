import React, { useState } from 'react'

import TabItem from './tabItem';

const tabItems = [
    {
      smallHeading: "50% Cashback",
      text: "High cashback on online and offline spends",
      src: "/images/cat-img-1.png",
      heading: "HDFC Regalia",
      tag1: "Travel",
      tag2: "Online Shopping"
    },
    {
        smallHeading: "50% Cashback",
        text: "High cashback on online and offline spends",
        src: "/images/cat-img-2.png",
        heading: "HDFC Regalia",
        tag1: "Travel",
        tag2: "Online Shopping"
      },
      {
        smallHeading: "50% Cashback",
        text: "High cashback on online and offline spends",
        src: "/images/cat-img-3.png",
        heading: "HDFC Regalia",
        tag1: "Travel",
        tag2: "Online Shopping"
      },
  ];
const CategoryTab = () => {
    const [toggleState, setToggleState] = useState("Featured");
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <div className="categoryArea">
                <div className="container">
                    <h2>Popular credit cards for every <br /> dedicated category</h2>
                    <div className="catLink">
                        <ul>
                            <li onClick={() => toggleTab("Featured")}
                                className={
                                    toggleState === "Featured" ? " active" : "  "
                                }>Featured</li>
                                <li onClick={() => toggleTab("Cashback")}
                                className={
                                    toggleState === "Cashback" ? " active" : "  "
                                }>Cashback</li>
                                     <li onClick={() => toggleTab("Rewards")}
                                className={
                                    toggleState === "Rewards" ? " active" : "  "
                                }>Rewards</li>
                                     <li onClick={() => toggleTab("Fuel")}
                                className={
                                    toggleState === "Fuel" ? " active" : "  "
                                }>Fuel</li>
                                     <li onClick={() => toggleTab("Business")}
                                className={
                                    toggleState === "Business" ? " active" : "  "
                                }>Business</li>
                        </ul>
                                </div>
                    <div className="tabCard ">
                        <div
                            className={
                                toggleState === "Featured"
                                    ? "tabContent tabContentActive"
                                    : "tabContent"
                            }
                        >
                            <div className="catrow">
                                {tabItems.map((item, index) => (
                                    <TabItem
                                        key={index}
                                        smallHeading={item.smallHeading}
                                        text={item.text}
                                        src={item.src}
                                        heading={item.heading}
                                        tag1={item.tag1}
                                        tag2={item.tag2}
                                    />
                                ))}
                            </div>
                        </div>
                        <div
                            className={
                                toggleState === "Cashback"
                                    ? "tabContent tabContentActive"
                                    : "tabContent"
                            }
                        >
                            <div className="catrow">
                                {tabItems.map((item, index) => (
                                    <TabItem
                                        key={index}
                                        smallHeading={item.smallHeading}
                                        text={item.text}
                                        src={item.src}
                                        heading={item.heading}
                                        tag1={item.tag1}
                                        tag2={item.tag2}
                                    />
                                ))}
                            </div>
                        </div>
                        <div
                            className={
                                toggleState === "Rewards"
                                    ? "tabContent tabContentActive"
                                    : "tabContent"
                            }
                        >
                            <div className="catrow">
                                {tabItems.map((item, index) => (
                                    <TabItem
                                        key={index}
                                        smallHeading={item.smallHeading}
                                        text={item.text}
                                        src={item.src}
                                        heading={item.heading}
                                        tag1={item.tag1}
                                        tag2={item.tag2}
                                    />
                                ))}
                            </div>
                        </div>
                        <div
                            className={
                                toggleState === "Fuel"
                                    ? "tabContent tabContentActive"
                                    : "tabContent"
                            }
                        >
                            <div className="catrow">
                                {tabItems.map((item, index) => (
                                    <TabItem
                                        key={index}
                                        smallHeading={item.smallHeading}
                                        text={item.text}
                                        src={item.src}
                                        heading={item.heading}
                                        tag1={item.tag1}
                                        tag2={item.tag2}
                                    />
                                ))}
                            </div>
                        </div>
                        <div
                            className={
                                toggleState === "Business"
                                    ? "tabContent tabContentActive"
                                    : "tabContent"
                            }
                        >
                            <div className="catrow">
                                {tabItems.map((item, index) => (
                                    <TabItem
                                        key={index}
                                        smallHeading={item.smallHeading}
                                        text={item.text}
                                        src={item.src}
                                        heading={item.heading}
                                        tag1={item.tag1}
                                        tag2={item.tag2}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CategoryTab