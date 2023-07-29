import React, { Fragment } from 'react'
function Menuitems({ items }) {
    return (
        <Fragment>
            {items.map((item) => {
                const {id, title, category, price, img, desc} = item
                return (
                    <div key={id} className="item">
                        <img src={img} alt={title} />
                        <div className='item_info'>
                            <header>
                                <h4 className="title">{title}</h4>
                                <h4 className='price'>${price}</h4>
                                <h4>{category}</h4>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div></div> )})}</Fragment>
    )
}

export default Menuitems