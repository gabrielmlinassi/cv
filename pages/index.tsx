export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* CSS forms plugin */}
      <form className="px-6 py-8 shadow rounded-lg bg-white space-y-5">
        <div>
          <label htmlFor="email">Email Address</label>
          <div>
            <input className="w-full" type="email" id="email" name="email" />
          </div>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              className="w-full"
              type="password"
              id="password"
              name="password"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company-size">Company Size</label>
          <div>
            <select id="company-size" name="company-size" className="w-full">
              <option></option>
            </select>
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            id="terms-and-privacy"
            name="terms-and-privacy"
          />
          <label className="ml-2 text-sm" htmlFor="terms-and-privacy">
            I agree to the <span>Terms</span> and <span>Privacy Policy</span>
          </label>
        </div>

        <div>
          <button className="w-full py-2 rounded-lg text-white bg-purple-500">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
