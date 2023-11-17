import React from "react";
import { useState } from "react";

import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { logourl } from "../../constants/constant";
import { BookmarkAdd } from "@mui/icons-material/";
import { Menu } from "@mui/icons-material/";
import { Search } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
// components 
import HeaderMenu from "./HeaderMenu";
const Header = () => {
  const [open,setOpen]= useState(null);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  const StyledToolbar = styled(Toolbar)`
    background: #121212;
    padding: 0 50px !important;
    min-height: 56px !important;
    justify-content: space-between;
   
    & > div {
      display: flex;
      align-itmes: center;
      cursor: pointer;
    }
      & > p {
        font-size: 14px;
        font-weight: 600;
        margin-left:2px;
      }
    }
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  `;
  const Logo = styled("img")({
    width: "56px",
  });

  const InputSearchField = styled(InputBase)`
    background: #ffffff;
    height: 31px;
    width: 606px;
    font-size: 14px;
    padding: 5px 0 6px 8px;
  `;
  return (
    <AppBar>
      <StyledToolbar>
        <Logo src={logourl} alt="" />

        <Box  onClick={handleClick}>
          <Menu/>
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <Box sx={{minWidth:"auto",width:"721px"}}>
          <Box sx={{ display: "flex" ,bgcolor:"#EEF5FF",color:"#000",borderTopLeftRadius:"4px", borderBottomLeftRadius:"4px", alignItems:"center",padding:"0 4px 0 12px" ,borderRight:"1px solid #fff"}}>
            <Typography>All</Typography>
            <ExpandMore />
          </Box>
          <InputSearchField></InputSearchField>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#fff",
              color: "gray",
              padding: " 0 4px",
              borderTopRightRadius:"4px", borderBottomRightRadius:"4px",
            }}
          >
            <Search></Search>
          </Box>
        </Box>

        <Typography>
          IMDB<Box component="span" color={"#43CAF4"}>Pro</Box>
        </Typography>

        <Box>
          <BookmarkAdd />
          <Typography>WatchList</Typography>
        </Box>

        <Typography>Sign In</Typography>

        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
