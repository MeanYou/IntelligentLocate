import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'

export default {
  path: 'HomePage',

  /* 布局基页 */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      // 注入 Reducer
      injectReducer('homePage', require('REDUCER/HomePage').default)

      /* 组件连接 state */
      const HomePageContainer = createContainer(
        ({ homePage }) => ({ homePage }),        // mapStateToProps,
        require('ACTION/HomePage').default,    // mapActionCreators,
        require('COMPONENT/HomePage/').default // 木偶组件
      )

      cb(null, HomePageContainer)
    }, 'HomePageView')
  }
}

/**
 * 【拓展】
 * 在 msg 的路由中，Reducer 是在 布局基页 中注入
 * 而在这里就可以在 indexRoute 中注入
 * 这主要取决于 Reducer 的作用范围
 */
