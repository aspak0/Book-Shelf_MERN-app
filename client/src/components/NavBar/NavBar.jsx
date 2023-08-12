import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [value, setValue] = useState();
  return (
    <>
      <div>
        <AppBar
          sx={{
            backgroundColor: "#252B48",
            borderRadius: "20px",
          }}
          position="sticky"
        >
          <Toolbar>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                fontFamily: "cursive",
                textTransform: "uppercase",
                color: "#a2ff86",
                fontWeight: "bold",
                letterSpacing: ".1em",
                backgroundColor: "black",
                padding: "5px",
                borderRadius: "8px",
                borderLeft: "2px solid #a2ff86",
                borderBottom: "2px solid #a2ff86",
              }}
            >
              <MenuBookIcon
                sx={{
                  marginRight: "10px",
                  color: "#fff",
                }}
              />
              Book-Shelf
            </Typography>
            <Tabs
              sx={{
                ml: "auto",
                "& .MuiTabs-indicator": {
                  backgroundColor: "#a2ff86",
                },
              }}
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={NavLink} to="/" label={"Home"} />
              <Tab LinkComponent={NavLink} to="/books" label={"Books"} />
              <Tab LinkComponent={NavLink} to="/addBooks" label={"Add Books"} />
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
