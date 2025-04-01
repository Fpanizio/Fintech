import React from "react";
import { useData } from "../Context/DataContext";

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

function MonthName(month: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + month);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

function setMonth(month: number) {
  const { setInicio, setFinal } = useData();
  const date = new Date();
  date.setMonth(date.getMonth() + month);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  setInicio(formatDate(firstDay));
  setFinal(formatDate(lastDay));
}

const MonthBtn = ({ month }: { month: number }) => {
  return (
    <button style={style} onClick={() => setMonth(month)}>
      {MonthName(month)}
    </button>
  );
};

export default MonthBtn;
