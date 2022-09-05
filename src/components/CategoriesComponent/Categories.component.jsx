import React from "react";
import './Categories.styles.scss';
import CategoryCard from "./CategoryCard/CategoryCard.component";
function Categories({ categoriesData }) {
    return (
        <div className="categories-container">
            <CategoryCard data={categoriesData} />
        </div>

    );
}

export default Categories;