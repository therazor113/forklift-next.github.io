import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import HeaderComponent from '../HeaderComponent'

import classes from './styles.module.scss'

const Layout = ({ children, titleID, titleExtra, style, style2 }) => {
  return (
    <div style={style} className={classes.container}>
      <HeadComponent />
      <HeaderComponent style={style} style2={style2} titleID={titleID} titleExtra={titleExtra}/>
      <main className={classes.main}>
        {children}
      </main>
      <FooterComponent />
    </div>
  )
}

export default Layout