import React, {useEffect, useRef, useState} from "react";
import sortIcon from "../../../assets/images/icons/sort-icon.svg";
import "./filters.css";

export const Filters = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [sortCategory, setSortCategory] = useState('popular');
    const popupClasses = isPopoverOpen ? 'sortPopup activePopup' : 'sortPopup';

    const sortHandler = (category: string): void => {
        setSortCategory(category);
        setIsPopoverOpen(false);
    };

    let currentSortCategoryText = 'популярности';
    switch (sortCategory) {
        case 'popular':
            currentSortCategoryText = 'популярности';
            break;
        case 'price':
            currentSortCategoryText = 'цене';
            break;
        case 'title':
            currentSortCategoryText = 'названию';
            break;
        default:
            currentSortCategoryText = 'популярности';
            break
    }

    return (
        <div className="myContainer">
            <div className='sortContainer'>
                <span><img src={sortIcon} className="sortIcon"/>Сортировка по: </span>
                <span className="sortCategory" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                    {currentSortCategoryText}
                    <div className={popupClasses} >
                        <ul className="sortList">
                            <li onClick={() => sortHandler('popular')}>популярности</li>
                            <li onClick={() => sortHandler('price')}>цене</li>
                            <li onClick={() => sortHandler('title')}>названию</li>
                        </ul>
                    </div>
                </span>
            </div>
        </div>
    );
};