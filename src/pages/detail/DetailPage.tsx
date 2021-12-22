import React, {useState, useEffect} from 'react'
import styles from './DetailPage.module.css'
import { RouteComponentProps, useParams } from 'react-router-dom'
import axios from 'axios'
import { Spin, Row, Col, DatePicker } from 'antd'

import { Header, Footer, ProductIntro } from '../../components'

const { RangePicker } = DatePicker
interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const {touristRouteId} = useParams<MatchParams>()
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`)
        setProduct(data)
        setLoading(false)
      } catch (error: any) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <Spin
      size="large"
      style={{
        marginTop: 200,
        marginBottom: 200,
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%"
      }}
    ></Spin>
  }
  if (error) {
    return <div>网站出错 {error}</div>
  }
  return <>
    <Header></Header>
      <div className={styles['page-content']}>
        {/* 产品简介与日期选择 */}
        <div className={styles['product-intro-container']}>
          <Row>
            <Col span={13}></Col>
            <Col span={11}><RangePicker open style={{marginTop: '20px'}} /></Col>
          </Row>
        </div>
        {/* 锚点菜单 */}
        <div className={styles['product-detail-anchor']}></div>
        {/* 产品特色 */}
        <div id="feature" className={styles['product-detail-container']}></div>
        {/* 费用 */}
        <div id="fees" className={styles['product-detail-container']}></div>
        {/* 预定须知 */}
        <div id="notes" className={styles['product-detail-container']}></div>
        {/* 产品评价 */}
        <div id="comments" className={styles['product-detail-container']}></div>
      </div>
    <Footer></Footer>
  </>
}