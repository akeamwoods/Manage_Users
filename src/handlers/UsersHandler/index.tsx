import React from "react";
import { Wrapper } from "./style";
import { ControlBar } from "../../components/ControlBar";
import { Table } from "../../components/Table";
import { Popup } from "../../components/Popup";
import { User } from "../../store/types";
import { useTypedSelector } from "../../store";
import { actions } from "../../store/actions";
import { useDispatch } from "react-redux";
import { Profile } from "../../components/Profile";

export const UsersHandler = () => {
  const dispatch = useDispatch();
  const list = useTypedSelector((state) => state.userData);
  const activeProfile = useTypedSelector((state) => state.activeProfile);
  const headers = [
    "avatar",
    "firstName",
    "lastName",
    "dateOfBirth",
    "email",
    "id",
  ];

  return (
    <Wrapper>
      <Popup
        isVisible={activeProfile ? true : false}
        onClick={() => dispatch(actions.activeProfileClosed())}
      >
        <Profile id={activeProfile} />
      </Popup>
      <ControlBar resultsLength={list.length} />
      <Table list={list as User[]} headers={headers} />
    </Wrapper>
  );
};
