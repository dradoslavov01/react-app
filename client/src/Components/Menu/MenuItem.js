import style from './Menu.module.css'

const MenuItem = ({
    id,
    onClick,
    children,
}) => {
    return (
        <li className={style.listItem}>
            <a href="#" onClick={() => onClick(id)}>{children}</a>
        </li>
    );
}

export default MenuItem