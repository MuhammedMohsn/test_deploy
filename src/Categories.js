import React, { Fragment } from "react";
function Categories({
  categories,
  filteritems,
  setselectedCategory,
  selectedCategory,
}) {
  return (
    <Fragment>
      <div className="btn_container">
        {categories.map((category) => {
          return (
            <button
              className="category"
              key={Math.random()}
              onClick={() => {
                filteritems(category);
                setselectedCategory(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>{" "}
    </Fragment>
  );
}

export default Categories;
