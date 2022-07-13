import '../styles/Validator.css'

const Validator = (props) => {
  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          // value={username}
          onChange={props.handleChange}
        />
        <label htmlFor="username">Username</label>

        <input
          type="password"
          placeholder="Password"
          id="password"
          // value={password}
          onChange={props.handleChange}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          // value={passwordConfirm}
          onChange={props.handleChange}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button className="submit" type="submit">
          Sign Up
        </button>
        <button className="reset" type="reset">
          Reset
        </button>
        <p className={props.validity}>Passwords must match.</p>
      </form>
    </div>
  )
}

export default Validator
