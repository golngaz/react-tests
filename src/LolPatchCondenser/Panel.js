import React from 'react'
import Paper from '@material-ui/core/Paper'
import withClass from '../HOC/withClass'


const MyPaper = withClass('panel')(Paper)

/**
 * @todo revoir bien
 *
 const {className, ...others} = this.props

 const WithClassPanel = withClass(clsx('panel', className))(Paper)

 return <WithClassPanel {...others} />
 */
const Panel = (props) => {
    return <MyPaper {...props} />
}

export default Panel