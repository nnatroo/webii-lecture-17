import employes from './datas/MOCK_DATA_1.json'
import customers from './datas/MOCK_DATA_2.json'
import classes from './modules/App.module.scss'

function App() {

    return (
        <>
            <h1>Users</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>IP Address</th>
                    <th>Profile Picture</th>
                </tr>
                <tbody>
                {customers.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.ip_address}</td>
                        <td><img src={user.profile_picture} alt=""/></td>
                    </tr>
                ))}
                </tbody>
            </table>

            <header>
                <figure className={classes['logo-wrapper']}>
                    <img src="./assets/react.svg" alt="logo"/>
                </figure>
            </header>
        </>
    )
}

export default App
