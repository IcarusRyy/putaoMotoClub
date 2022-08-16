import Routes from '@/routes'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
const Layout = () => {
  return (
    <>
     <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
        {Routes.map(item => (
          <Route key={item.key} exact path={item.path} component={item.component}></Route>
        ))}
        <Redirect from="*" to={'/'} />
      </Switch>
      </Suspense>
     </Router>
    </>
  )
}
export default Layout