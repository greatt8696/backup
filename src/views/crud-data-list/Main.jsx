import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { List  } from "react-virtualized";
import Test from "./Test";
import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalBody,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
const Main = () => {
  const assetTransactions = useSelector(
    (state) => state.transferAssetReducer.assetTransactions,
  )
  useEffect(() => {
    console.log(assetTransactions)
  }, [assetTransactions])
  
  let [listItem,setListItem] = useState();
  
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      setListItem(listItem=assetTransactions[index])
      if(listItem){
        return (
          <Test listItem={listItem} key={key} style={style} assetTransactions={assetTransactions}/>
        );
      }
    },
    [assetTransactions,listItem]
  );
  return (
      <List
        className="Main"
        width={1622}
        height={1500}
        rowCount={assetTransactions.length}
        rowHeight={64}
        rowRenderer={rowRenderer}
        list={assetTransactions}
        style={{ outline: "none" }}
      />
  );
};

export default React.memo(Main);
