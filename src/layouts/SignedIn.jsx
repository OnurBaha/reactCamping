import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/88722996?s=400&u=24f2de67b1edc96fd8a57fcc80b9dcf378f81dbd&v=4" />
        <Dropdown pointing="top left" text='Onur'>
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"/>
            <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
