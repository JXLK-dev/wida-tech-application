import React from "react";

interface PopUpDialogProps {
  label: string;
}

export const PopUpDialog: React.FC<PopUpDialogProps> = (props) => {
  return (
    <div
      className="fixed inset-0 flex w-screen h-screen items-center justify-center bg-black bg-opacity-50"
      onClick={props.onClick}
    >
      <div className="bg-white p-4 rounded-lg text-black">
        <h2>{props.label}</h2>
      </div>
    </div>
  );
};
