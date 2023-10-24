import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Stack } from "@mui/material";
import SocialLogin from "../components/SocialLogin"; 

const BoldText = styled("h1")({
  fontWeight: "bold",
  fontSize: "20px",
  justifyContent: "center",
  alignItems: "center",
  margin: "50px ",
});

function Login() {
  return (
    <Stack spacing={5}>
      <Grid container direction="column">
        <BoldText>Login</BoldText>
      </Grid>
      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <SocialLogin />  
        {/* 구글 로그인 구현 후 대체 */}
        <img width="250px" src="/img/google_login.png" alt="" /> 
      </Grid>
      <Grid style={{ color: "#888", marginBottom: "5s0px" }}>
        사용 중이신 SNS로 간편하게 로그인하세요!
      </Grid>
    </Stack>
  );
}

export default Login;
