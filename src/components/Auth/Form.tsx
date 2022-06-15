const AuthForm = () => {
  return (
    <div className="w-[100rem]  flex flex-row m-10 mx-auto rounded-lg">
      <div className="bg-[#2C73EB] w-[50%] h-[50rem] grid place-items-center object-cover">
        <img
          src="https://img.freepik.com/free-vector/international-day-democracy_23-2148608691.jpg?t=st=1655277829~exp=1655278429~hmac=5075574e29aea087740e0d9e51643190ccee20d0208674c73f30c83b9dc8205e&w=826"
          alt="vote"
          width={500}
          className="rounded-lg h-auto"
        />
      </div>
      <div className="bg-white  drop-shadow-md w-[50%] rounded-lg ">
        <div className="mt-[5rem] justify-center grid place-items-center">
          <p className="text-center font-bold text-lg capitalize mb-2">
            Account Signup
          </p>
          <p className="text-center text-sm opacity-25 ml-[6rem]">
            Become a member and enjoy exlusive
          </p>
          <p className="text-center text-sm opacity-25 mr-[4rem]">promotions</p>

          <div>
            <form action="" className="ml-[11rem] mt-10">
              <div className="flex flex-col gap-y-3">
                <label htmlFor="fname" className="text-sm opacity-50">Full Name</label>
                <input type="text" name="fname" className="border-2 w-[20rem] py-2 px-5 rounded-lg focus:outline-none focus:border-[#2C73EB] " />
              </div>
              <div className="flex flex-col gap-y-3 mt-[1.5rem]">
                <label htmlFor="email" className="text-sm opacity-50">Email Address</label>
                <input type="text" name="email" className="border-2 w-[20rem] py-2 px-5 rounded-lg focus:outline-none focus:border-[#2C73EB] " />
              </div>
              <div className="flex flex-col gap-y-3 mt-[1.5rem]">
                <label htmlFor="gender" className="text-sm opacity-50">Gender</label>
                <input type="text" name="gender" className="border-2 w-[20rem] py-2 px-5 rounded-lg focus:outline-none focus:border-[#2C73EB] " />
              </div>
              <div className="flex flex-col gap-y-3 mt-[1.5rem]">
                <label htmlFor="dob" className="text-sm opacity-50">Date Of Birth</label>
                <input type="text" name="dob" className="border-2 w-[20rem] py-2 px-5 rounded-lg focus:outline-none focus:border-[#2C73EB] " />
              </div>
              <div className="flex flex-col gap-y-3 mt-[1.5rem]">
                <input type="submit" name="submit" value="Create account" className="   py-2 px-5 rounded-lg text-white font-bold bg-[#2C73EB] focus:outline-none focus:boder-white  " />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
