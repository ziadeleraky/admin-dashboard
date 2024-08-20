import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../../data';

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => {
              return (
                <Link to={listItem.url} className="list-item" key={listItem.id}>
                  <img src={listItem.icon} alt="home icon" />
                  <span className="list-item_title">{listItem.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;