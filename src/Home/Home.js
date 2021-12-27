
import React, { useState } from "react";
import { Box, TextField, Button, Container, Grid, Card, CardHeader, Avatar, IconButton, CardContent, Typography, MenuItem, Menu } from "@mui/material";
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles, withStyles, createStyles } from '@mui/styles';

import StudentsData from './students.json';

const styles = theme => ({
    card: {
      backgroundColor: theme.palette.cardBg.main
    }
  });

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSearchingList, setFilteredSearchData] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const clickToSearch = () => {
        let x = StudentsData.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())
            || item.city.toLowerCase().includes(searchQuery.toLowerCase())
            || item.education.toLowerCase().includes(searchQuery.toLowerCase())
            || item.hobbies.toLowerCase().includes(searchQuery.toLowerCase())
            || item.work.toLowerCase().includes(searchQuery.toLowerCase()))
        setFilteredSearchData([...x]);
    }

    const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            "& .MuiCard-root": {
                borderRadius: theme.palette.cardRadius.main,
            },
            "& .MuiCardContent-root": {
                backgroundColor: theme.palette.cardBg.main,
                color: theme.palette.cardFont.main,
              },

            "& .MuiCardHeader-root": {
                backgroundColor: theme.palette.cardBg.main,
                color: theme.palette.cardFont.main,
              },
        },
        buttonRoot: {
            "& .MuiButton-root": {
                borderRadius: theme.palette.buttonRadius.main
            }
        }
    }));

    const classes = useStyles();

    

    return (
        <Container fixed sx={{ marginTop: "10px" }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField fullWidth type="search" label="Search" color="primary" id="Search" onChange={(e) => { setSearchQuery(e.target.value); setFilteredSearchData([]); }} />
                <Button className={classes.buttonRoot} variant="contained" color="primary" sx={{ marginLeft: "10px" }} onClick={clickToSearch}>Search</Button>
            </Box>
            <Grid sx={{ flexGrow: 1, marginTop: "30px" }}>
                <Grid item xs={12}>
                    {filteredSearchingList && filteredSearchingList.length > 0 ?
                        filteredSearchingList.map((data, ind) => (
                            <Card className={classes.root} sx={{ marginBottom: "10px" }} key={ind}>
                                {console.log(classes.root)}
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {data.name.charAt(0).toUpperCase()}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon onClick={handleClick}/>

                                            <Menu
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                PaperProps={{
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1.5,
                                                        '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        '&:before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <MenuItem>
                                                    View Profile
                                                    </MenuItem>
                                                <MenuItem>
                                                    Add to favorite
                                                    </MenuItem>
                                                <MenuItem>
                                                    Share
                                                    </MenuItem>
                                                <MenuItem>
                                                    Connect
                                                    </MenuItem>
                                            </Menu>
                                        </IconButton>
                                    }

                                    title={`${data.name} (${data.work})`}
                                    subheader={`Education: ${data.education}, Hobbies: ${data.hobbies}, City: ${data.city}`}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {data.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                        :
                        <div>Type and hit search button</div>
                    }
                </Grid>
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(Home);