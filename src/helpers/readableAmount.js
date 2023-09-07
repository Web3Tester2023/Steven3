import { useRef, useState,useEffect } from 'react';
import {BigNumber, utils} from 'ethers';
import _ from 'lodash';

const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export function useTimer(deadline , interval = SECOND) {

  let timestampDate;
  if(isChrome){
    timestampDate = (new Date(deadline)).getTime(); //2012-02-26
  }else{
    timestampDate = new Date(deadline.replace(/-/g, "/")).getTime()

  }
  const [timespan, setTimespan] = useState(timestampDate - Date.now());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan((_timespan) => _timespan - interval);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  /* If the initial deadline value changes */
  useEffect(() => {
    if(isChrome){
        setTimespan(new Date(deadline) - Date.now());
      }else{
        setTimespan(new Date(deadline.replace(/-/g, "/")) - Date.now())
        console.log("second", Math.floor((timespan / SECOND) % 60))
      }
      

  }, [deadline]);

  return {
    days: Math.floor(timespan / DAY),
    hours: Math.floor((timespan / HOUR) % 24),
    minutes: Math.floor((timespan / MINUTE) % 60),
    seconds: Math.floor((timespan / SECOND) % 60)
  };
}

export function humanReadableAmount(amount, requestedDecimals, tokenDecimals) {
    if (
        _.isNil(amount) ||
        (typeof amount === 'string' && !/^((\+|-)?(0|([1-9][0-9]*))(\.[0-9]+)?)$/.test(amount))
    ) return null;

    const amountBn = BigNumber.isBigNumber(amount) ? amount : BigNumber.from(amount);

    let shortenedAmountBn;
    const decimalDifference = tokenDecimals - requestedDecimals;
    if (decimalDifference > 0) {
        shortenedAmountBn = amountBn.div(BigNumber.from(10).pow(decimalDifference));
    } else {
        shortenedAmountBn = amountBn.mul(BigNumber.from(10).pow(Math.abs(decimalDifference)));
    }

    let shortenedAmount = utils.formatUnits(shortenedAmountBn, requestedDecimals);
    if (+shortenedAmount === 0) return "0";

    if (true && +shortenedAmount === 0) {
        let tempAmount = shortenedAmount.slice(2);

        tempAmount = _.trimStart(tempAmount, "0").slice(0, requestedDecimals);
        tempAmount = "0..." + tempAmount;
        shortenedAmount = tempAmount;
    }

    const shortenedSplit = shortenedAmount.split('.');

    const shortenedBase = shortenedSplit[0];
    const shortenedDecimals = _.trimEnd(shortenedSplit[1], "0");
    if (+shortenedDecimals === 0) {
        shortenedAmount = shortenedBase;
    } else {
        shortenedAmount = shortenedBase + "." + shortenedDecimals;
    }

    return shortenedAmount;
}