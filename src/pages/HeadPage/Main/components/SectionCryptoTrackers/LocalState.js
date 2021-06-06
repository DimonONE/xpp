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
import tracker__item_img_22 from "../../../../../img/trackera__item-img-22.png";
import tracker__item_img_23 from "../../../../../img/trackera__item-img-23.png";
import tracker__item_img_24 from "../../../../../img/trackera__item-img-24.png";
import tracker__item_img_25 from "../../../../../img/trackera__item-img-25.png";
import tracker__item_img_26 from "../../../../../img/trackera__item-img-26.png";
import tracker__item_img_27 from "../../../../../img/trackera__item-img-27.png";
import tracker__item_img_28 from "../../../../../img/trackera__item-img-28.png";

import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  listElements: [
    {
      id: 1,
      delay: 100,
      link: "https://www.coingecko.com/en/coins/xx-platform",
      icon: media__item_img_1,
    },

    {
      id: 2,
      delay: 200,
      link: "https://coinpaprika.com/coin/xxp-xx-platform",
      icon: media__item_img_2,
    },

    {
      id: 3,
      delay: 300,
      link: "https://coincodex.com/crypto/xx-platform/",
      icon: media__item_img_3,
    },

    {
      id: 4,
      delay: 400,
      link: "https://www.livecoinwatch.com/price/XXPlatform-XXP",
      icon: media__item_img_4,
    },

    {
      id: 5,
      delay: 500,
      link: "https://coinranking.com/coin/puao0rdQA+xxplatform-xxp",
      icon: media__item_img_5,
    },

    {
      id: 6,
      delay: 600,
      link: "https://coincheckup.com/coins/xx-platform",
      icon: media__item_img_6,
    },

    {
      id: 7,
      delay: 100,
      link: "https://coinlib.io/coin/XXP/XX+Platform",
      icon: media__item_img_7,
    },

    {
      id: 8,
      delay: 200,
      link: "https://coinpare.io/coin/xxp-xx-platform",
      icon: media__item_img_8,
    },

    {
      id: 9,
      delay: 300,
      link: "https://foundico.com/ru/ico/xx-platform.html",
      icon: media__item_img_9,
    },

    {
      id: 10,
      delay: 400,
      link: "https://icolink.com/ico-xx-platform.html",
      icon: media__item_img_10,
    },

    {
      id: 11,
      delay: 500,
      link: "https://icolink.com/ico-xx-platform.html",
      icon: media__item_img_11,
    },

    {
      id: 12,
      delay: 600,
      link: "https://coincost.net/ru/currency/xx-platform",
      icon: media__item_img_12,
    },

    {
      id: 13,
      delay: 100,
      link: "https://coindar.org/ru/coin/xx-platform",
      icon: media__item_img_13,
    },

    {
      id: 14,
      delay: 200,
      link: "https://coinmarketcal.com/ru/coin/xx-platform",
      icon: media__item_img_14,
    },

    {
      id: 15,
      delay: 300,
      link: "https://cryptonews.com/coins/xxp-xx-platform/",
      icon: media__item_img_15,
    },

    {
      id: 16,
      delay: 400,
      link: "https://coindataflow.com/en/currency/xx-platform",
      icon: media__item_img_16,
    },

    {
      id: 17,
      delay: 500,
      link: "https://www.bankomatfinder.at/fi/kryptowaehrungen/xx-platform",
      icon: media__item_img_17,
    },
    {
      id: 18,
      delay: 500,
      link: "https://cryptopro.app/price/xx-platform/",
      icon: media__item_img_18,
    },
    {
      id: 19,
      delay: 500,
      link: "https://nomics.com/assets/xxp-xx-platform",
      icon: media__item_img_19,
    },
    {
      id: 20,
      delay: 500,
      link: "https://coincost.icu/en/crypto-ico/xx-platform",
      icon: media__item_img_20,
    },
    {
      id: 21,
      delay: 500,
      link: "https://cryptfolio.com/currencies/xxp",
      icon: media__item_img_21,
    },
    {
      id: 22,
      delay: 500,
      link: "https://www.hotbit.io/exchange?symbol=XXP_BTC",
      icon: tracker__item_img_22,
    },
    {
      id: 23,
      delay: 500,
      link: "https://www.hotbit.io/exchange?symbol=XXP_USDT",
      icon: tracker__item_img_23,
    },
    {
      id: 24,
      delay: 500,
      link: "https://crex24.com/ru/exchange/XXP-USDT",
      icon: tracker__item_img_24,
    },
    {
      id: 25,
      delay: 500,
      link: "https://thehedger.ru/xx-platform",
      icon: tracker__item_img_25,
    },
    {
      id: 26,
      delay: 500,
      link: "https://blockspot.io/coin/xx-platform/",
      icon: tracker__item_img_26,
    },
    {
      id: 27,
      delay: 500,
      link: "https://athcoinindex.com/coin/xx-platform",
      icon: tracker__item_img_27,
    },
    {
      id: 28,
      delay: 500,
      link: "https://coincap.icu/ru/crypto-ico/xx-platform",
      icon: tracker__item_img_28,
    },
  ],
};

export const { useGlobalState } = createGlobalState(initialState);
