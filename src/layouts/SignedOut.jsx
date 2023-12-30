import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
  return (
    <div>
        <Menu.Item>
        <Button secondary onClick={props.signIn}>Giriş Yap</Button>
        <Button secondary style={{marginLeft:'0.5em'}}>Kayit Ol</Button>
        </Menu.Item>
    </div>
  )
}
