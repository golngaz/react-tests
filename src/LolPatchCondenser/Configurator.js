import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'

export default class Configurator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {description: ''}
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {this.props.item ? this.renderCard() : ''}
                </Grid>
            </Grid>
        )
    }

    renderCard() {
        return (
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <Avatar src={this.props.item.img} />
                        <span>{this.props.item.name}</span>
                    </Typography>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-flexible"
                                className="description-editor"
                                label="Description du buff/nerf"
                                multiline
                                rowsMax="4"
                                value={this.state.description}
                                onChange={(e) => this.setState({description: e.target.value})}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">Ajouter</Button>
                    <Button size="small" color="secondary">Annuler</Button>
                </CardActions>
            </Card>
        )
    }
}