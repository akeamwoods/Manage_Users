import React from "react";
import { Wrapper, ControlSpan, ResultsText, Button } from "./style";
import { Searchbar } from "../Searchbar";
import { FaPlus } from "react-icons/fa";

export const ControlBar: React.FC<{ resultsLength: number }> = ({
  resultsLength,
}) => {
  return (
    <Wrapper>
      <span>
        <h1>User Management</h1>
        <ResultsText>{`${resultsLength} results found`}</ResultsText>
      </span>
      <ControlSpan>
        <Searchbar />
        <Button>
          <FaPlus />
          Add User
        </Button>
      </ControlSpan>
    </Wrapper>
  );
};
