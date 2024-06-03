import { useState } from "react";
import UserInput from "../UserInput/UserInput";

const UserInfo = () => {

    const [email, setEmail] = useState('delatMneNetchego@skutchno.com');
    const [username, setUsername] = useState('defaultUsername');
    const [password, setPassword] = useState('defaultPassword');

    return (
        <>
            <UserInput label="Email" value={email} onSave={setEmail} type="email" />
            <UserInput label="User name" value={username} onSave={setUsername} />
            <UserInput label="Password" value={password} onSave={setPassword} type="password" />
        </>
    )
}

export default UserInfo;