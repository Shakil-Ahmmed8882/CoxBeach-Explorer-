import { Link } from "react-router-dom";

const Login = () => {

 const handleLogin = (e) =>{
      e.preventDefault()

      const formData = new FormData(e.currentTarget)
      const email = formData.get('email')
      const password = formData.get('password')

      console.log(email, password)

 }

  return (
    <div className="w-full h-[70vh] flex items-center flex-col">
            <h1 className="text-3xl font-bold pb-5">Login</h1>
      <form onSubmit={handleLogin} className="w-2/5 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            name='email'
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type="password"
            name='password'
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-primary-clr">Login</button>
        </div>
      <p className="text-center pt-3">Already have an account? <Link to='/register' className="text-primary-clr">Do not have an an accoutn</Link></p>
      </form>
    </div>
  );
};

export default Login;
