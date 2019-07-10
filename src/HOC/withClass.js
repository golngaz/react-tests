import React from "react";
import clsx from "clsx";

/**
 * @fixme lorsque l'on wrap un composant input enfant dans le HOC, des bugs apparaissent lors des onChanges
 */
const withClass = (customClassName) => (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
        }

        render() {
            const {className, ...others} = this.props

            return <Component className={clsx(customClassName, className)} {...others} />
        }
    }
}

export default withClass
