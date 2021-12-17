import React from 'react'
import styles from './DetailPage.module.css'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  return <h1>路线详情页面，路线ID：{props.match.params.touristRouteId}</h1>
}