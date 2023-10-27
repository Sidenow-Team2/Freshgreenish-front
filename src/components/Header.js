import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/loginSlice';
import {
  AppBar, Typography, Button, Toolbar, styled, InputBase, IconButton, Chip, Divider, Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";


const customAppBarStyle = {
  background: "white",
  color: "black",
  padding: "30px",
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  margin: "0 auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(
      1,
    )} ${theme.spacing(4)}`,
    width: "350px",
  },
  border: "1px solid #8FBE88",
  borderRadius: "4px",
  padding: "6px",
}));

const Buttons = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "100px",
  "& > button": {
    boxShadow: "none",
    textTransform: "none",
  },
  "& > button:hover": {
    color: "#8FBE88",
    boxShadow: "white",
    backgroundColor: "white",
  },
  "& > button:active": {
    boxShadow: "none",
    color: "#8FBE88",
  },
});

export default function Header() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate("/Login");
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("com.naver.nid.access_token");
    window.location.reload();
  };
  return (
    <>
      <AppBar style={customAppBarStyle} elevation={0} position="static">
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Toolbar>
            {isLoggedIn ? (
              <>
                <Button color="inherit" onClick={handleLogout}>
                  로그아웃
                </Button>
                <Divider
                  orientation="vertical"
                  style={{ margin: "0 5px", height: "18px" }}
                />
              </>
            ) : (
              <>
                <Button color="inherit" onClick={handleLogin}>
                  로그인
                </Button>
                <Divider
                  orientation="vertical"
                  style={{ margin: "0 5px", height: "18px" }}
                />
              </>
            )}
            <Button color="inherit">고객센터</Button>
          </Toolbar>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              onClick={handleLogin}
            >
              <img
                src="/img/logo.png"
                width="50"
                alt=""
                style={{ marginRight: "20px" }}
              />
              <Typography style={{ color: "#8FBE88", fontSize: "24px" }}>
                푸릇파릇
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            {/* 검색 */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="검색어를 입력해주세요."
                inputProps={{ "aria-label": "search" }}
                style={{
                  border: "1px solid #8FBE88",
                  borderRadius: "4px",
                  padding: "6px",
                }}
              />
            </Search>
          </Grid>

          <Grid item>
            {/* 아이콘 버튼 */}
            <IconButton>
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <IconButton>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-end"
          marginTop="50px"
        >
          <Toolbar>
            <Grid item xs={9}>
              {/* 카테고리 */}
              <Buttons>
                <Button
                  color="inherit"
                  disableRipple
                  style={{ fontSize: "16px", whiteSpace: "nowrap" }}
                >
                  국산 과일
                </Button>
                <Button
                  color="inherit"
                  disableRipple
                  style={{ fontSize: "16px", whiteSpace: "nowrap" }}
                >
                  수입 과일
                </Button>
                <Button
                  color="inherit"
                  disableRipple
                  style={{ fontSize: "16px", whiteSpace: "nowrap" }}
                >
                  냉동 과일
                </Button>
                <Button
                  color="inherit"
                  disableRipple
                  style={{ fontSize: "16px", whiteSpace: "nowrap" }}
                >
                  정기 배송
                </Button>
              </Buttons>
            </Grid>

            <Grid
              item
              xs={3}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              
                <Chip label="정기배송안내" />
              
            </Grid>
          </Toolbar>
        </Grid>
      </AppBar>
    </>
  );
}
