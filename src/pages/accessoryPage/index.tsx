import React, {useState} from 'react';
import {Carousel, SelectComponent} from "../../components";
import {Col, Image, Row} from "antd";
import banner_1 from "../../imgs/banner/banner_1.webp";
import banner_2 from "../../imgs/banner/banner_2.webp";
import {Accessory} from "../../features";
import FilterComponent from "../../components/filterComponent";
import './style.scss';

interface Props {
    category: string;
}

const listProduct = [
  {key: 1, label: 'Bao da/Ốp lưng/Ví da', value: '1'},
  {key: 2, label: 'Balo/ Túi chống sốc', value: '2'},
  {key: 3, label: 'Bút Pencil', value: '3'},
  {key: 4, label: 'Chuột/Bàn Phím', value: '4'},
  {key: 5, label: 'Cường lực bảo vệ', value: '5'},
  {key: 6, label: 'Dây đeo Apple Watch', value: '6'},
  {key: 7, label: 'Sạc dự phòng', value: '7'},
  {key: 8, label: 'Sạc/Cáp', value: '8'},
  {key: 9, label: 'Tai nghe/ Loa', value: '9'},
  {key: 10, label: 'Apple TV', value: '10'},
  {key: 11, label: 'AirTag', value: '11'},
];
const listTradeMark= [
  {key: 1, label: 'Apple(36)', value: '1'},
  {key: 2, label: 'Ducis(5)', value: '2'},
  {key: 3, label: 'Ducis(5)', value: '3'},
  {key: 4, label: 'Ducis(5)', value: '4'},
];
const listPrice= [
  {key: 1, label: 'đ0 — đ2.000.000', value: '1'},
  {key: 2, label: 'đ2.000.000 — đ4.000.000', value: '2'},
  {key: 3, label: 'đ4.000.000 — đ6.000.000', value: '3'},
  {key: 4, label: 'đ6.000.000 — đ8.000.000', value: '4'},
  {key: 4, label: 'đ8.000.000 — đ10.000.000', value: '5'},
];
const typeProduct = [
  {label: 'Iphone', value: 'Iphone'},
  {label: 'IPad', value: 'IPad'},
  {label: 'Mac', value: 'Mac'},
  {label: 'Watch', value: 'Watch'},
];
const listFilter = [
  {label: 'Giá thấp nhất đến cao nhất', value: 'ASC'},
  {label: 'Giá cao nhất đến thấp nhất', value: 'DESC'},
];

const AccessoryPage: React.FC<Props> = ({ category }) => {

  const [itemSelectedProduct, setItemSelectedProduct] = useState('');
  const [listTradeMarkSelected, setListTradeMarkSelected] = useState([]);
  const [listPriceSelected, setListPriceSelected] = useState([]);

  const handleOnChangeTypeProduct = (value: any) => {

  };
  const handleOnChangeListFilter = (value: any) => {

  };
  const handleOnChangeListProduct = (value: any) => {
    setItemSelectedProduct(value)
  };
  const handleOnChangeTradeMark = (value: any) => {
    setListTradeMarkSelected(value)
  };
  const handleOnChangePrice = (value: any) => {
    setListPriceSelected(value)
  };
    return (
      <div className="container full_width mt_20 accessory">
        <h1 className="title-page">Phụ kiện</h1>
          <Carousel>
              <div>
                  <Image
                    className="store_carousel_item"
                    src={banner_1}
                    preview={false}
                    height={375}
                  >
                      1
                  </Image>
              </div>
              <div>
                  <Image
                    className="store_carousel_item"
                    src={banner_2}
                    preview={false}
                    height={375}
                  >
                      2
                  </Image>
              </div>
          </Carousel>
        <Row className="wrap-select-filter mt_20">
          <SelectComponent
            width="250px"
            placeholder="Sản phẩm tương thích"
            listData={typeProduct}
            onChangeValue={(item: any)=> handleOnChangeTypeProduct(item)}/>
          <SelectComponent
            width="250px"
            placeholder="Lọc theo..."
            listData={listFilter}
            onChangeValue={(item: any)=> handleOnChangeListFilter(item)}/>
        </Row>
        <Row className="mt_20"
             gutter={[
               { xs: 5, lg: 20 },
               { xs: 5, lg: 20 },
             ]}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <FilterComponent title="Danh mục sản phẩm"
                             type="radio" data={listProduct}
                             value={itemSelectedProduct}
                             onChangeValue={(item: any)=> handleOnChangeListProduct(item)}
            />
            <FilterComponent className="mt_20"
                             title="Thương hiệu"
                             type="checkbox"
                             data={listTradeMark}
                             onChangeValue={(listSelect: any)=> handleOnChangeTradeMark(listSelect)}
                             value={listTradeMarkSelected}
            />
            <FilterComponent className="mt_20"
                             title="Mức giá"
                             type="checkbox"
                             data={listPrice}
                             onChangeValue={(listSelect: any)=> handleOnChangePrice(listSelect)}
                             value={listPriceSelected}
             />
          </Col>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <Accessory category={category} />
          </Col>
        </Row>
      </div>
    );
};

export default AccessoryPage;
