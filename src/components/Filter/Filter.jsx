import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice.js";
import { selectFilter } from "../../redux/filters/selectors.js";
import styles from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <div className={styles.wrap}>
      <input
        className={styles.input}
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Search by name or number"
      />
    </div>
  );
}

export default Filter;
