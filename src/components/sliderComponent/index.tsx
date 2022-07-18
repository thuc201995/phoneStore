import React from 'react';
import { isNumber } from "lodash";
import { Slider } from 'antd';
import {SliderRangeProps} from "antd/es/slider";
import "./style.scss";

interface Props extends SliderRangeProps{
  props?: SliderRangeProps
}
const formatCurrency = (num: number | undefined) => {
  if(!isNumber(num))
    return 0;
  return num.toLocaleString('en-US', {style : 'currency', currency : 'VND'});
};

const SliderComponent: React.FC<Props> = ({...props}) => (
  <div className="wrap-slider">
    <Slider
      {...props}
    />
    <span className="currency">{formatCurrency(props?.defaultValue?.[0])} - {formatCurrency(props?.defaultValue?.[1])}</span>
  </div>
);

export default SliderComponent;
