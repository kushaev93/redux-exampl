import React from 'react';

//MUI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

 const PostItem = (props) => {
     const { id, title, body, userId} = props.data;

               return (
                 props.data.map(post => {
                    return(

                     <Card className="card-item">
                        <CardHeader 
                        title={post.title} 
                        avatar={
                            <FormatColorTextIcon />
                        } />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.body}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="add to favorites">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                    )
                })
            )
        };

        
export default PostItem;
