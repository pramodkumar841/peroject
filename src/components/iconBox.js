import React from 'react'
import IconBoxItem from './iconBoxItem'
const iconBoxItems = [
    {
      src: "/images/Chart.png",
      heading: "Personalised Offers",
      text: "Find best Credit Cards based on your spend pattern"
    },
    {
      src: "/images/Percent.png",
      heading: "Earn Rewards",
      text: "Earn Rewards for every successful Credit Card approval"
    },
    {
      src: "/images/Credit-Card.png",
      heading: "Compare Cards",
      text: "Compare your existing Cards with best in the industry"
    },
    {
      src: "/images/Shield.png",
      heading: "Max Benefits",
      text: "Get maximum benefits from your Credit Cards"
    }
  ];
const IconBox = () => {
    return (
        <>
            <div className="iconboxArea">
                <div className="container">
                    {iconBoxItems.map((item, index) => (
                        <IconBoxItem
                            key={index}
                            src={item.src}
                            heading={item.heading}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default IconBox