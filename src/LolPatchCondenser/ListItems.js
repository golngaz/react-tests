import React from "react";
import Panel from "./Panel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import withClass from "../HOC/withClass";

export default class ListItems extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const ListItemAvatarResized = withClass('list-item-icon')(ListItemAvatar)

        return (
            <Panel style={{height: '100%'}}>
                <List component="nav" aria-label="Mailbox folders">
                    {this.props.items.map((item) => {return (
                        <ListItem key={item.id} button>
                            <ListItemAvatarResized><img src={item.img} alt="" /></ListItemAvatarResized>
                            <ListItemText>{item.name}</ListItemText>
                        </ListItem>
                    )})}
                </List>
            </Panel>
        )
    }
}