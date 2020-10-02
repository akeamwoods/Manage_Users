import React from "react";
import { Wrapper, NavLinks, Link, Button } from "./style";
import { ProfileInfo } from "./ProfileInfo";
import { useLocation, useHistory } from "react-router-dom";
import { actions } from "../../store/actions";
import { useDispatch } from "react-redux";
import { FaLock, FaUsers, FaCog } from "react-icons/fa";

export const SideMenu = () => {
  let history = useHistory();
  const location = useLocation();
  const isLoggedIn = location.pathname !== "/";
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(actions.logoutButtonClicked());
    history.push("/");
  };
  return isLoggedIn ? (
    <Wrapper>
      <ProfileInfo />
      <NavLinks>
        <Link exact to="/users" activeStyle={{ opacity: "1" }}>
          <FaUsers size="24" />
          Users
        </Link>
        <Link exact to="/settings" activeStyle={{ opacity: "1" }}>
          <FaCog size="24" />
          Settings
        </Link>
      </NavLinks>
      <Button onClick={handleLogout}>
        <FaLock /> Logout
      </Button>
    </Wrapper>
  ) : null;
};
