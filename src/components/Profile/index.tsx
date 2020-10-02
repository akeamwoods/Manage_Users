import React from "react";
import { useTypedSelector } from "../../store";
import { Avatar } from "../Avatar";
import { Wrapper, Row, Button } from "./style";
import { FaTrash } from "react-icons/fa";
import { actions } from "../../store/actions";
import { useDispatch } from "react-redux";

export const Profile: React.FC<{ id?: string }> = ({ id }) => {
  const user = useTypedSelector((state) =>
    state.userData.find((user) => user.id === id)
  );
  const dispatch = useDispatch();
  return user ? (
    <Wrapper>
      <Avatar img={user.avatar} />
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <Row>
        <h3>Date of Birth</h3>
        <p>{user.dateOfBirth}</p>
      </Row>
      <Button onClick={() => dispatch(actions.profileDeleted(user.id))}>
        <FaTrash />
        Delete Profile
      </Button>
    </Wrapper>
  ) : null;
};
