import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField
} from "@mui/material";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const API_URL = "https://jsonmock.hackerrank.com/api/stocks";

  const handleClick = async (input) => {
    let response = await fetch(`${API_URL}?date=${input}`);
    let datas = await response.json();
    console.log(datas);
    setData(datas.data);
  };
  return (
    <div className="App">
      <h1>Qureos App</h1>
      <TextField
        id="outlined-basic"
        label="Date here"
        variant="outlined"
        onChange={(e) => setInput(e.target.value)}
        className="inputBox"
      />
      <Button
        variant="contained"
        onClick={() => handleClick(input)}
        className="searchBox"
      >
        Submit
      </Button>

      <Box
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        className="appBox"
      >
        <nav aria-label="secondary mailbox folders">
          {data &&
            (data.length > 0 ? (
              <List>
                <ListItem className="appBoxText">
                  <ListItemText primary={`Open: ${data[0] && data[0].open}`} />
                </ListItem>
                <ListItem className="appBoxText">
                  <ListItemText
                    primary={`Close: ${data[0] && data[0].close}`}
                  />
                </ListItem>
                <ListItem className="appBoxText">
                  <ListItemText primary={`High: ${data[0] && data[0].high}`} />
                </ListItem>
                <ListItem className="appBoxText">
                  <ListItemText primary={`Low: ${data[0] && data[0].low}`} />
                </ListItem>
              </List>
            ) : (
              <div style={{ padding: '1rem' }}>No Results Found </div>
            ))}
        </nav>
      </Box>
    </div>
  );
}
