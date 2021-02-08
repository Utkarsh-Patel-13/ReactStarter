// import React, { Component } from "react";

// Class Component
// class SingleList extends Component {
//     state = {
//         items: this.props.items,
//     };
//     render() {
//         return (
//             <div className="section-center">
//                 {this.state.items.map((menuItem) => {
//                     const { id, title, img, desc, price } = menuItem;

//                     return (
//                         <article key={id} className="menu-item">
//                             <img src={img} alt={title} className="menu-photo" />
//                             <div className="item-info">
//                                 <header>
//                                     <h4 className="font-bold">{title}</h4>
//                                     <h4 className="menu-price font-bold">
//                                         $ {price}
//                                     </h4>
//                                 </header>
//                                 <div>
//                                     <p className="item-text">{desc}</p>
//                                 </div>
//                             </div>
//                         </article>
//                     );
//                 })}
//             </div>
//         );
//     }
// }

// Functional Component
import React from "react";

const SingleList = ({ items }) => {
    return (
        <div className="section-center">
            {items.map((menuItem) => {
                const { id, title, img, desc, price } = menuItem;

                return (
                    <article key={id} className="menu-item m-3">
                        <img src={img} alt={title} className="menu-photo" />
                        <div className="item-info">
                            <header>
                                <h4 className="font-bold">{title}</h4>
                                <h4 className="menu-price font-bold">
                                    $ {price}
                                </h4>
                            </header>
                            <div>
                                <p className="item-text">{desc}</p>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default SingleList;
