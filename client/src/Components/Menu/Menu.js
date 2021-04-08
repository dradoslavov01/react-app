import style from './Menu.module.css';
import MenuItem from './MenuItem'
import { items } from '../Header/Header'


const Menu = () => {
   return (
      <aside className={style.aside}>
         <ul>
            {items.map(i => {
               return (
                  <MenuItem key={i.id}>{i.content}</MenuItem>
               )
            })}
         </ul>
      </aside>
   );
}

export default Menu;
