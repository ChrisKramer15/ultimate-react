import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BtnExercise = ({ children }: Props) => {
  return (
    <div>
      <button type="button" className="btn btn-warning">
        {children}
      </button>
    </div>
  );
};

export default BtnExercise;
