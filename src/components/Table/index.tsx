import React from "react";
import { useDispatch } from "react-redux";
import {
  Column,
  Table as VirtualizedTable,
  AutoSizer,
} from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once
import { actions } from "../../store/actions";
import { User } from "../../store/types";
import { FaUser } from "react-icons/fa";
import { Button } from "./style";

export const Table: React.FC<{ list: User[]; headers: string[] }> = ({
  list,
  headers,
}) => {
  const dispatch = useDispatch();
  const AvatarCell = ({ cellData }: any) => (
    <img
      key={cellData}
      src={cellData}
      style={{ height: "50px" }}
      alt="user avatar"
    />
  );

  const ControlsCell = ({ cellData }: any) => (
    <div key={cellData}>
      <Button onClick={() => dispatch(actions.viewProfileClicked(cellData))}>
        <FaUser />
        View Profile
      </Button>
    </div>
  );

  return (
    <AutoSizer>
      {({ height, width }) => (
        <VirtualizedTable
          width={width}
          height={height}
          headerHeight={50}
          rowHeight={50}
          rowCount={list.length}
          rowGetter={({ index }) => list[index]}
          rowStyle={{ borderBottom: "2px solid #eee" }}
          headerStyle={{
            color: "grey",
            fontWeight: 600,
          }}
        >
          {headers.map((header) => (
            <Column
              key={header}
              width={width}
              label={header !== "id" ? header : undefined}
              dataKey={header}
              cellRenderer={
                header === "avatar"
                  ? AvatarCell
                  : header === "id"
                  ? ControlsCell
                  : undefined
              }
            />
          ))}
        </VirtualizedTable>
      )}
    </AutoSizer>
  );
};
