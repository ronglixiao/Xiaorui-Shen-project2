import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";

function BasicList() {
  return (
    <Wrapper elevation={3}>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Please select a difficulty level:
          </ListSubheader>
        }
      >
        <Link to="/game/normal">
          <ListItem
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: 600,
              },
            }}
          >
            <ListItemButton sx={{ pl: 2, borderRadius: "10px" }}>
              <ListItemText primary="Game Normal" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/game/hard">
          <ListItem
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: 600,
              },
            }}
          >
            <ListItemButton sx={{ pl: 2, borderRadius: "10px" }}>
              <ListItemText primary="Game Hard" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/rules">
          <ListItem
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: 600,
              },
            }}
          >
            <ListItemButton sx={{ pl: 2, borderRadius: "10px" }}>
              <ListItemText primary="Rules" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Wrapper>
  );
}

export default BasicList;
