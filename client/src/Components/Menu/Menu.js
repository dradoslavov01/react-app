import { useState } from 'react';
import MenuItem from './MenuItem'
import { items } from '../Header/Header'
import style from './Menu.module.css';


const Menu = () => {

   const [currentItem, setCurrentItem] = useState();
   return (
      <aside className={style.aside}>
         <ul>
            {items.map(i => {
               return (
                  <MenuItem key={i.id} id={i.id} onClick={setCurrentItem}>{i.content}</MenuItem>
               )
            })}
         </ul>
      </aside>
   );
}

export default Menu;