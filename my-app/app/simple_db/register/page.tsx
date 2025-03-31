import STYLE from "@/constants/style"; 
import registerUser from "../_actions/registerUser";

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <form action={registerUser}>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    className={STYLE}
                    name="name"
                    type="text" maxLength={20} required />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input
                    className={STYLE}
                    name="email"
                    type="email" maxLength={20} required />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input
                    className={STYLE}
                    name="password"
                    type="password" maxLength={20} required />
            </div>
            <div>
                <button className={STYLE} type="submit">Register</button>
            </div>
        </form>
      </div>
    </div>
  )
}
