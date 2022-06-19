import React, {useState} from "react";
import {Radio, Space } from 'antd';
import { Checkbox } from 'antd';
import _ from "lodash";
import cn from "classnames";
import "./style.scss";

interface Props {
  title: string,
  type: string,
  data: Array<Item>,
  className?: string,
  value: any,
  onChangeValue: Function
}
interface Item {
  key?: number,
  label:string,
  value: string
}
const FilterComponent: React.FC<Props> = ({title, type, data, value, className, onChangeValue}) => {

  const onChange = (e: any) => {
    if(type === "radio"){
      onChangeValue(e.target.value);
    }else {
      onChangeValue(e);
    }
  };


  return (
    <div className={cn("filter-component", className)}>
      <div className="title">
        {title}
      </div>
      {type === "radio" &&
        <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              {!_.isEmpty(data) && data.map((item: any) => (
                <Radio value={item.value}>{item?.label || ''}</Radio>
              ))}
            </Space>
        </Radio.Group>
      }
      {type === "checkbox" && <Checkbox.Group
          options={data}
          defaultValue={value}
          onChange={onChange}
      />}
    </div>
  );
};

export default FilterComponent;
