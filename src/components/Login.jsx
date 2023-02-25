const Login = (props) => {
  const { user, handleLogin, handleLogout } = props;

  return (
    <div>
      {
        user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )
      }
    </div>
  );
};

export default Login;