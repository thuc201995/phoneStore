import React from 'react';
import { Select, SelectProps  } from 'antd';
import _ from "lodash";
import "./style.scss";

interface Props extends SelectProps{
  listData: Array<Item>,
  onChangeValue: Function,
  defaultValue?: string,
  Props?:SelectProps,
  width?: string
}
interface Item {
  label: string,
  value: string
}

const SelectComponent: React.FC<Props> = ({listData, onChangeValue, defaultValue, width, ...Props}) => {
  const { Option } = Select;

  const handleChange = (value: string) => {
    onChangeValue(value)
  };
  return (
    <div className="select-component-wrapper">
      <Select defaultValue={defaultValue}
              style={{ width: width }}
              size="large"
              onChange={handleChange}
              {...Props}>
        {!_.isEmpty(listData) && listData.map((item: any, index: number) => (
           <Option value={item.value} key={index}>
             {item.label}
           </Option>
          )
        )}
      </Select>
    </div>
  );
};

export default SelectComponent;
