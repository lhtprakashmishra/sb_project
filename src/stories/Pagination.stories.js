import React from "react";
import Pagination from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

// Default Story with 3 Pages
export const Default = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Pagination currentPage={2} totalPages={3} onPageChange={() => {}} />
    </div>
  );
};

// Story with 5 Pages (Pagination Expanded)
export const FivePages = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    </div>
  );
};

// Story with 10 Pages (With active page in the middle)
export const TenPagesMiddle = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Pagination currentPage={5} totalPages={10} onPageChange={() => {}} />
    </div>
  );
};

// Story with 10 Pages (First Page Active)
export const TenPagesFirst = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
    </div>
  );
};

// Story with 10 Pages (Last Page Active)
export const TenPagesLast = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Pagination currentPage={10} totalPages={10} onPageChange={() => {}} />
    </div>
  );
};
