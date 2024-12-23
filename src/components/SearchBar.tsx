"use client";

import { useDispatch } from "react-redux";
import { setSearchTerm } from "@/redux/slices/articlesSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search articles..."
      className="p-2 border rounded w-full"
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
}
