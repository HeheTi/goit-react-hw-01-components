import PropTypes from 'prop-types';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {Object.entries(stats).map(([label, quantyty]) => {
          return (
            <li key={label}>
              <span className="label">{label}</span>
              <span className="quantity">{quantyty}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
