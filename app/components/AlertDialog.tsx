import React from "react";

interface AlertDialogProps {
  title: string;
  subtitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  subtitle,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="pt-5 pb-20">{subtitle}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
        onClick={onConfirm}
      >
        Confirm
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
};
