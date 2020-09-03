import React, { useState } from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "./Button"

const useStyles = makeStyles({
  root: {
   width: '300px'
  },
  input: {
    boxSizing: "border-box",
    width: '100%'
   },
});

function App() {
  const classes = useStyles();
  const [result, setResult] = useState("");

  function handleclick(e) {
    
    setResult(result.concat(e.target.id));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <Grid container spacing={1} className={classes.root}>
        <Grid item xs={12}>
          <input className={classes.input} type="text" value={result} />
        </Grid>
        <Grid item xs={4}>
          <Button value={"clear"} action={clear}/>
        </Grid>
        <Grid item xs={4}>
        <Button value={"c"} action={backspace}/>
        </Grid>
        <Grid item xs={4}>
        <Button value="+" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="7" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="8" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="9" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="-" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="4" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="5" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="6" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="*" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="1" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="2" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="3" action={handleclick}/>
        </Grid>
        <Grid item xs={3}>
        <Button value="/" action={handleclick}/>
        </Grid>
        <Grid item xs={4}>
          <Button value="0" action={handleclick}/>
        </Grid>
        <Grid item xs={4}>
        <Button value="." action={handleclick}/>
        </Grid>
        <Grid item xs={4}>
        <Button value="result" action={calculate}/>
        </Grid>
      </Grid>
  )

}

export default App;