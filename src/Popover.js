import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import { SettingsInputAntenna } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

export default function SimplePopover() {
  const classes = useStyles();
  const history=useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = useState(false);
  const [input,setInput]= useState('')
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSearch(!search);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearch(!search);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US`
      )
      .then((res) => setTrend(res.data.results));
    console.log(trend);
  }, []);

  return (
    <div>
      <Button
        aria-describedby={id}
        variant=""
        color="primary"
        onClick={handleClick}
      >
        {search ? <input type='text'value={input} onChange={(e)=>setInput(e.target.value)} style={{ backgroundColor: "white" }}  />  :<SearchIcon style={{ color: "white" }}/> }
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: "center"
        }}
        transformOrigin={{
          horizontal: "center"
        }}
        style={{margin:'40px'}}
      >
        <Typography className={classes.typography}>
       {trend.map((d)=>(
         <p
         onClick={() => {
          history.push(
            `/MovieDetails/${d.id}${d.backdrop_path}/${d.title}`
          );
        }}
         >{d.title}</p>
       ))}
        </Typography>
      </Popover>
    </div>
  );
}
