import React, {useState} from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'


export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignOut() {
        setIsAuthenticated(false)
    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        <CartSummary/>
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn} />}
                        
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
