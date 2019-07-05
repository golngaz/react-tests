import React from "react";
import Paper from "@material-ui/core/Paper";
import clsx from 'clsx';
import withClass from "../HOC/withClass";



export default class Panel extends React.Component {
    render() {
        const {className, ...others} = this.props

        const WithClassPanel = withClass(clsx('panel', className))(Paper)

        return <WithClassPanel {...others} />
    }
}