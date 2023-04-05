import Link from "next/link";

const registration = () => (
  <div className="container">
    <div className="form-container">
      <h1 className="title">Registration</h1>
      <form className="form">
        <div className="input-container">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input className="input" type="text" id="name" name="name" required />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input className="input" type="email" id="email" name="email" required />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>
        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
      <div className="signup">
        <p>Already have an account?</p>
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .container {
        height: 130vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("/background.jpg");
        background-size: cover;
        backdrop-filter: blur(5px);
        padding-top:60px;
      }

      .form-container {
        width: 400px;
        background-color: #fff;
        padding: 40px;
        border-radius: 4px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      }

      .title {
        font-size: 24px;
        margin-bottom: 32px;
      }

      .form {
        display: flex;
        flex-direction: column;
      }

      .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
      }

      .label {
        font-size: 14px;
        margin-bottom: 8px;
        color: black;
      }

      .input {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 12px 16px;
      }

      .button {
        background-color: #0070f3;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 12px 16px;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .button:hover {
        background-color: #0062cc;
      }

      .signup {
        display: flex;
        align-items: center;
        margin-top: 16px;
      }

      .signup p {
        font-size: 14px;
        margin-right: 8px;
      }

      .signup a {
        color: #0070f3;
        text-decoration: none;
        transition: color 0.2s;
      }
    
      .signup a:hover {
        color: #0048b7;
      }
    `}</style>
      </div>
    );
    export default registration;