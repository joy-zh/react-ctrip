import React, {useState, useEffect} from 'react'
import styles from './DetailPage.module.css'
import { RouteComponentProps, useParams } from 'react-router-dom'
import axios from 'axios'

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
      await axios.get(``)
    }
    fetchData()
  }, [])

  return <h1>路线详情页面，路线ID：{props.match.params.touristRouteId}</h1>
}