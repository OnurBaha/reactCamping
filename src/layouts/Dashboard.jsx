import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid} from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'

function Dashboard() {
  return (
    <div>
      <ToastContainer position='bottom-right'/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path='/' Component={ProductList}/>
              <Route exact path='/products' Component={ProductList}/>
              <Route path='/products/:id' Component={ProductDetail}/>
              <Route path='/cart' Component={CartDetail}/>
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Dashboard