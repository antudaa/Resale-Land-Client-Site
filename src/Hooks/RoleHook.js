import { useState } from "react"

const RoleHook = () => {
    const [ role, setRole ] = useState('user');
    return [role, setRole];

};

export default RoleHook;