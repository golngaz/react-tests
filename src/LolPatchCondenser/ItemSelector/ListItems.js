import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import withClass from "../../HOC/withClass";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class ListItems extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const ListItemAvatarResized = withClass('list-item-icon')(ListItemAvatar)

        return (
            <List component="nav" aria-label="Mailbox folders">
                {this.props.items.isEmpty() ? <CircularProgress /> : this.props.items.map((item) => {return (
                    <ListItem className="item-button-selector" onClick={() => this.onClick(item)} key={item.id} button>
                        <ListItemAvatarResized><img src={item.img} alt="" /></ListItemAvatarResized>
                        <ListItemText>{item.label}</ListItemText>
                    </ListItem>
                )})}
            </List>
        )
    }

    onClick(item) {
        this.props.onSelect && this.props.onSelect(item)
    }
}