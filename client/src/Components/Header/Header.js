import style from './Header.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

export const items = [
    { id: "1", content: 'Going to 1' },
    { id: "2", content: 'Going to 2' },
    { id: "3", content: 'Going to 3' },
    { id: "4", content: 'Going to 4' },
    { id: "5", content: 'Going to 5' },
    { id: "6", content: 'Going to 6' },
    { id: "7", content: 'Going to 7' },
    { id: "8", content: 'Going to 8' },
    { id: "9", content: 'Going to 9' },
    { id: "10", content: 'Going to 10' }

];

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><img src="/white-origami-bird.png" alt="white origami" /></li>
                {items.map(i => {
                    return (
                        <NavigationItem key={i.id}>{i.content}</NavigationItem>
                    )
                })}
            </ul>
        </nav >
    );
}

export default Header;