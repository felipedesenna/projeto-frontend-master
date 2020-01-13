import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './List.css';

export default class List extends Component {
    render() {
        const { list } = this.props;

        return (
            <Card className="card-list">
                <CardActionArea>
                    <CardMedia className="card-img"
                    image={list.attributes.image.original}
                    title="Contemplative Reptile" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {list.attributes.canonicalName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {list.attributes.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}
