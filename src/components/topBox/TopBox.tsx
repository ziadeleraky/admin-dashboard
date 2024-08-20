import { topDealUsers } from '../../data.ts';
import './topBox.scss';

export default function TopBox() {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => {
          return (
            <div className="list-item" key={user.id}>
              <div className="user">
                <img src={user.img} alt="user image" />
                <div className="user_texts">
                  <span className="username">{user.username}</span>
                  <span className="email">{user.email}</span>
                </div>
              </div>
              <span className="amount">{user.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
