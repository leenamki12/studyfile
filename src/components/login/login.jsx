import React from "react";

const Login = ({ authServer }) => {
  const onLogin = (event) => {
    authServer //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <div>
      <ul>
        <li>
          <button onClick={onLogin}>Google</button>
        </li>
        <li>
          <button onClick={onLogin}>Github</button>
        </li>
      </ul>
    </div>
  );
};

export default Login;
