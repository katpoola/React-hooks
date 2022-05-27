import React, { useContext } from "react";

import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Start.module.css";

const Start = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.start}>
      <h1>Welcome to A Typical Page!</h1>
      <Button className={classes.startBtn} onClick={authCtx.onClickLogin}>
        Login
      </Button>
      <Button className={classes.startBtn} onClick={authCtx.onClickRegister}>
        Register
      </Button>
    </Card>
  );
};

export default Start;
