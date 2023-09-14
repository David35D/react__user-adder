import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = ({items}) => {
    
    if(items.length === 0 ) {
        return (
            <Card className={classes.users}>
                <p className={classes.fallback}>No users have been added yet.</p>
            </Card>
        );
    }

    return (
        <Card className={classes.users}>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.userId}
                    >
                        {item.username} ({item.userAge})
                    </li>
                ))}
            </ul>
        </Card>
    )
};

export default UsersList;