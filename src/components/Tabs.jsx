import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photo", "gif", "video"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex gap-5 px-14 py-10">
      {tabs.map((el, idx) => {
        return (
          <button
            className={`bg-emerald-600 cursor-pointer active:scale-95 px-5 py-2 rounded uppercase ${activeTab === el ? "bg-yellow-600" : "bg-blue-600"}`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTabs(el));
            }}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
