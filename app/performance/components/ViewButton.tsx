import React from "react";

export const ViewButton: React.FC = (props) => {
  return (
    <div className="flex justify-center space-x-4">
      <button
        className="bg-blue-200 hover:bg-blue-700 font-bold py-2 px-4 rounded text-black"
        onClick={() => {
          props.setLabels(Object.keys(props.daily(props.json)));
          props.setData(Object.values(props.daily(props.json)));
        }}
      >
        Daily
      </button>
      <button
        className="bg-blue-200 hover:bg-blue-700 font-bold py-2 px-4 rounded text-black"
        onClick={() => {
          props.setLabels(Object.keys(props.weekly(props.json)));
          props.setData(Object.values(props.weekly(props.json)));
        }}
      >
        Weekly
      </button>
      <button
        className="bg-blue-200 hover:bg-blue-700 font-bold py-2 px-4 rounded text-black"
        onClick={() => {
          props.setLabels(Object.keys(props.monthly(props.json)));
          props.setData(Object.values(props.monthly(props.json)));
        }}
      >
        Monthly
      </button>
    </div>
  );
};
