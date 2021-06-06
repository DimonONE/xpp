import media__item_img_1 from "../../../../../img/media__item-img-1.png";
import media__item_img_2 from "../../../../../img/media__item-img-2.png";
import media__item_img_3 from "../../../../../img/media__item-img-3.png";
import media__item_img_4 from "../../../../../img/media__item-img-4.png";
import media__item_img_5 from "../../../../../img/media__item-img-5.png";
import media__item_img_6 from "../../../../../img/media__item-img-6.png";
import media__item_img_7 from "../../../../../img/media__item-img-7.png";
import media__item_img_8 from "../../../../../img/media__item-img-8.png";
import media__item_img_9 from "../../../../../img/media__item-img-9.png";
import media__item_img_10 from "../../../../../img/media__item-img-10.png";
import media__item_img_11 from "../../../../../img/media__item-img-11.png";
import media__item_img_12 from "../../../../../img/media__item-img-12.png";
import media__item_img_13 from "../../../../../img/media__item-img-13.png";
import media__item_img_14 from "../../../../../img/media__item-img-14.png";
import media__item_img_15 from "../../../../../img/media__item-img-15.png";
import media__item_img_16 from "../../../../../img/media__item-img-16.png";
import media__item_img_17 from "../../../../../img/media__item-img-17.png";
import media__item_img_18 from "../../../../../img/media__item-img-18.png";
import media__item_img_19 from "../../../../../img/media__item-img-19.png";
import media__item_img_20 from "../../../../../img/media__item-img-20.png";
import media__item_img_21 from "../../../../../img/media__item-img-21.png";

import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  listElements: [
    {
      id: 1,
      delay: 100,
      link: "https://finance.yahoo.com/news/xx-platform-advanced-trading-platform-174500642.html?.tsrc=fin-srch",
      icon: media__item_img_1,
    },

    {
      id: 2,
      delay: 200,
      link: "https://www.benzinga.com/pressreleases/21/02/ac19568881/xx-platform-an-advanced-trading-platform-for-investors-and-stakers",
      icon: media__item_img_2,
    },

    {
      id: 3,
      delay: 300,
      link: "http://www.digitaljournal.com/pr/4968984",
      icon: media__item_img_3,
    },

    {
      id: 4,
      delay: 400,
      link: "https://icoholder.com/blog/safe-investments-myth-or-reality/",
      icon: media__item_img_4,
    },

    {
      id: 5,
      delay: 500,
      link: "https://www.lelezard.com/en/news-19642322.html",
      icon: media__item_img_5,
    },

    {
      id: 6,
      delay: 600,
      link: "https://www.accesswire.com/628745/XX-Platform-An-Advanced-Trading-Platform-for-Investors-and-Stakers",
      icon: media__item_img_6,
    },

    {
      id: 7,
      delay: 100,
      link: "https://aboutyourmag.info/2021/02/09/xx-platform-an-advanced-trading-platform-for-investors-and-stakers-about-your-online-magazine/",
      icon: media__item_img_7,
    },

    {
      id: 8,
      delay: 200,
      link: "http://markets.post-gazette.com/postgazette/news/read/40966765/xx_platform_an_advanced_trading_platform_for_investors_and_stakers",
      icon: media__item_img_8,
    },

    {
      id: 9,
      delay: 300,
      link: "https://apnews.com/press-release/accesswire/technology-business-financial-technology-deflation-computer-and-data-security-1a7cb1537d834cb8e179bb0bf0a9ab39",
      icon: media__item_img_9,
    },

    {
      id: 10,
      delay: 400,
      link: "https://cryptoshib.com/xx-platform-advanced-trading/",
      icon: media__item_img_10,
    },

    {
      id: 11,
      delay: 500,
      link: "https://crymarket.org/2021/02/09/xx-platform-an-advanced-trading-platform-for-investors-and-stakers/",
      icon: media__item_img_11,
    },

    {
      id: 12,
      delay: 600,
      link: "http://markets.financialcontent.com/streetinsider/news/read/40966765",
      icon: media__item_img_12,
    },

    {
      id: 13,
      delay: 100,
      link: "http://markets.financialcontent.com/startribune/news/read/40966765/XX_Platform_An_Advanced_Trading_Platform_for_Investors_and_Stakers",
      icon: media__item_img_13,
    },

    {
      id: 14,
      delay: 200,
      link: "https://markets.financialcontent.com/ibtimes/news/read/40966765",
      icon: media__item_img_14,
    },

    {
      id: 15,
      delay: 300,
      link: "https://markets.financialcontent.com/bostonherald/news/read/40966765",
      icon: media__item_img_15,
    },

    {
      id: 16,
      delay: 400,
      link: "http://business.theantlersamerican.com/theantlersamerican/news/read/40966765/XX_Platform_An_Advanced_Trading_Platform_for_Investors_and_Stakers",
      icon: media__item_img_16,
    },

    {
      id: 17,
      delay: 500,
      link: "http://business.dailytimesleader.com/dailytimesleader/news/read/40966765/XX_Platform_An_Advanced_Trading_Platform_for_Investors_and_Stakers",
      icon: media__item_img_17,
    },
    {
      id: 18,
      delay: 500,
      link: "#",
      icon: media__item_img_18,
    },
    {
      id: 19,
      delay: 500,
      link: "#",
      icon: media__item_img_19,
    },
    {
      id: 20,
      delay: 500,
      link: "#",
      icon: media__item_img_20,
    },
    {
      id: 21,
      delay: 500,
      link: "#",
      icon: media__item_img_21,
    },
  ],
};

export const { useGlobalState } = createGlobalState(initialState);
