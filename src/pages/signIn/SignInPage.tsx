import React from 'react'
import styles from './SignIn.module.css'
import { UserLayout } from '../../layouts/userLayout'
import {SignInForm} from './SignInForm'

export const SignInPage: React.FC = () => {
  return (
    <UserLayout>
      <SignInForm></SignInForm>
    </UserLayout>
  )
}