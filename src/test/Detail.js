import React, { useEffect, useState } from 'react';
// import { useShopping } from './context/ShoppingContext';
import { useShopping } from './ShoppingContext';
import { fetchProducts } from './api';
import { useParams } from 'react-router';
import './Details.scss';
import { Check, CheckBox } from '@mui/icons-material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
function Detail({ match, products }) {
    const {state,dispatch} = useShopping()
    const { productId } = useParams();

    const [details, setDetails] = useState()

    useEffect(()=>{

      const fetchData = async () => {
        try {
          // const response = await fetch(products);
          const response = await fetch('/dummy.json');
          if (!response.ok) {
            throw new Error('데이터를 가져올 수 없습니다.');
          }
          const data = await response.json();
          const productsArray = Object.values(data);
          // console.log(productsArray)
          dispatch({ type: 'SET_PRODUCTS', payload: productsArray });
        } catch (error) {
          console.error('상품 목록을 불러오는 중 오류 발생:', error);
        }
      };
    
      fetchData();

      const products = state.products[0]
      setDetails(products && products.find(e=> e.id == productId))
      console.log('getdata')
      console.log('getdata')


    },[])

    return (
      <div className="product-detail">
        <div className='tob-box'>

          <div className='image'>
            <img src={details && details.img} alt="images" />
          </div>
          <div className='info'>
            <div className='title-set'>
              <div className='title'>{details && details.name}</div>
              <div className='sub-title'>{details && details.subTitle}</div>
              <div className='price'>{details && details.price} 원</div>
              <div className='login-alert'>로그인 후, 적립 혜택이 제공됩니다.</div>
            </div>
            <div className='info-details'>
              <hr/>
              <div className='deli'>
                <div className='info-title'>배송</div>
                <div className='info-detail'>{details && details.deliveryType}</div>
              </div>
              <hr/>
              <div className='sell'>
                <div className='info-title'>판매자</div>
                <div className='info-detail'>{details && details.seller}</div>
              </div>
              <hr/>
              <div className='pack'>
                <div className='info-title'>포장타입</div>
                <div className='info-detail'>{details && details.packageType}</div>
              </div>
              <hr/>
              <div className='unit'>
                <div className='info-title'>판매단위</div>
                <div className='info-detail'>{details && details.unit}</div>
              </div>
              <hr/>
              <div className='kg'>
                <div className='info-title'>중량/용량</div>
                <div className='info-detail'>{details && details.capacity}</div>
              </div>



              <hr/>
              <div className="info-center">

              <div className='from'>
                < div className='info-title'>원산지<div/>
                  <div className='info-detail'>{details && details.origin}</div>
                </div>
              <hr/>
              <div className='guide'>
                <div className='info-title'>안내사항</div>
                <div className='info-detail'>{details && details.notification}</div>
              </div>
              </div>
              <hr/>

              {/* <div className='select'>
                <div className='info-title'>상품선택</div>
                <div className='info-detail'>
                  <div className="price-title">{details && details.name}</div>
                  <div className='count'>
                    <div className='counter'></div>
                    <div className='all-price'></div>
                  </div>
                </div>
              </div> */}

              <hr/>
              <div className='how-deli'>
                <div className='info-title'>배송방식</div>
                <div className='info-detail'>
                  <div className='normal'>
                    <div className="deli-title">
                      <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="일반배송" />
                      </FormGroup>
                    </div>

                    <div className="deli-title">
                      <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="정기배송" />
                      </FormGroup>
                    </div>
                  </div>        <hr/>
                </div>
            </div>
            </div>

            <div className='count'>
              <div className='total'>
                <div className='total-price'>총 상품금액: {details && details.price} </div>
              </div>
              <div className='login-test'>로그인 후, 적립 혜택 제공</div>
            </div>
            <div className='goto'>
              <div className='like'></div>
              <div className='cart'>
              <Button variant="contained" color="success">장바구니에 담기</Button>
              </div>

            </div>

          </div>
        </div>
        <div className='content-box'>
          <div className='first'></div>
          <div className='more-detail'></div>
          <div className='more-info'></div>
          <div className='why'></div>

        </div>

        <div className='bottom-box'>
        </div>

      </div>
    </div>
    );
  }

export default Detail;