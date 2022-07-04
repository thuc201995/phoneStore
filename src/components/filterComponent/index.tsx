import React from "react";
import { Radio, Space } from "antd";
import { Checkbox } from "antd";
import { isEmpty } from "lodash";
import cn from "classnames";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { RadioChangeEvent } from "antd/es/radio";
import "./style.scss";

interface Props {
  title: string;
  type: string;
  data: Array<Item>;
  className?: string;
  value: any;
  onChangeValue: Function;
}
interface Item {
  key?: number;
  label: string;
  value: string;
}
const FilterComponent: React.FC<Props> = ({
  title,
  type,
  data,
  value,
  className,
  onChangeValue,
}) => {
  const onChangeCheckbox = (e: CheckboxValueType[]) => {
    onChangeValue(e);
  };
  const onChangeRadio = (e: RadioChangeEvent) => {
    onChangeValue(e.target.value);
  };

  return (
    <div className={cn("filter-component", className)}>
      <div className="title">{title}</div>
      {type === "radio" && (
        <Radio.Group onChange={onChangeRadio} value={value}>
          <Space direction="vertical">
            {!isEmpty(data) &&
              data.map((item: any) => (
                <Radio value={item.value}>{item?.label || ""}</Radio>
              ))}
          </Space>
        </Radio.Group>
      )}
      {type === "checkbox" && (
        <Checkbox.Group
          options={data}
          defaultValue={value}
          onChange={onChangeCheckbox}
        />
      )}
    </div>
  );
};

export default FilterComponent;
