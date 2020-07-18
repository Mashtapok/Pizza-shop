import React, {useRef, useState} from "react";
import sortIcon from "../../../assets/images/icons/sort-icon.svg";
import "./filters.css";
import {useClickOutside} from "../../../hooks/useClickOutSide";

type Props = {
    sortPrice: () => void;
    sortPopular:() => void;
    sortTitle:() => void
};

export const Filters:React.FC<Props> = ({sortPrice, sortPopular, sortTitle}) => {
    const sortPopup = useRef<HTMLSpanElement>(null);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [sortCategory, setSortCategory] = useState('popular');
    const popupClasses = isPopoverOpen ? 'sortPopup activePopup' : 'sortPopup';

    useClickOutside(sortPopup, () => setIsPopoverOpen(false));

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

    const popularSortHandler = () => {
        sortPopular();
        sortHandler('popular')
    };

    const priceSortHandler = () => {
        sortPrice();
        sortHandler('price')
    };

    const titleSortHandler = () => {
        sortTitle();
        sortHandler('title')
    };

    return (
        <div className="myContainer">
            <div className='sortContainer'>
                <span><img src={sortIcon} className="sortIcon"/>Сортировка по: </span>
                <span ref={sortPopup}
                      className="sortCategory"
                      onClick={() => isPopoverOpen ? setIsPopoverOpen(false) : setIsPopoverOpen(true)}>
                    {currentSortCategoryText}
                    <div className={popupClasses} >
                        <ul className="sortList">
                            <li onClick={popularSortHandler}>популярности</li>
                            <li onClick={priceSortHandler}>цене</li>
                            <li onClick={titleSortHandler}>названию</li>
                        </ul>
                    </div>
                </span>
            </div>
        </div>
    );
};