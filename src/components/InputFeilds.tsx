import React, { useRef } from "react";
import "./todoStyle.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeilds = ({ todo, setTodo, handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="input"  onSubmit={(e)=> {handleAdd(e);inputRef.current?.blur()}}>
      <input type="input" ref={inputRef} value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder="Enter your task" className="input_box" />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputFeilds;
