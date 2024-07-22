import React from 'react'

function page() {
  return (
    <>
    

    <section className="bg-gray-100">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 hidden sm:flex">
            <img
              alt="Background"
              src="https://cdn.pixabay.com/photo/2023/12/01/07/23/ai-generated-8423032_640.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                The Artist
              </h1>

              <p className="mt-4 leading-relaxed text-white/90">
                At Artist, we specialize in connecting clients with top-tier artists for unforgettable events. Our streamlined booking process ensures a hassle-free experience, allowing you to secure the perfect talent for any occasion with just a few simple steps.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-4 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <form >
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="FirstName" className="block text-md font-medium text-gray-700">First Name</label>
                    <input type="text" id="FirstName" name="first_name" className="pl-3 mt-1 h-10 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"/>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="LastName" className="block text-md font-medium text-gray-700">Last Name</label>
                    <input type="text" id="LastName" name="last_name" className="pl-3 mt-1 h-10 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"/>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="Email" className="block text-md font-medium text-gray-700">Email</label>
                    <input type="email" id="Email" name="email" className="pl-3 mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"/>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="Password" className="block text-md font-medium text-gray-700">Password</label>
                    <input type="password" id="Password" name="password" className="pl-3 mt-1 h-10 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"/>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="PasswordConfirmation" className="block text-md font-medium text-gray-700">Password Confirmation</label>
                    <input type="password" id="PasswordConfirmation" name="password_confirmation" className="pl-3 mt-1 h-10 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"/>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="VideoLink1" className="block text-md font-medium text-gray-700">Video Link 1</label>
                    <input type="text" id="VideoLink1" name="video_link1" className="pl-3 mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm" placeholder="Enter video link 1"/>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="VideoLink2" className="block text-md font-medium text-gray-700">Video Link 2</label>
                    <input type="text" id="VideoLink2" name="video_link2" className="pl-3 mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm" placeholder="Enter video link 2"/>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="VideoLink3" className="block text-md font-medium text-gray-700">Video Link 3</label>
                    <input type="text" id="VideoLink3" name="video_link3" className="pl-3 mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm" placeholder="Enter video link 3"/>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="About" className="block text-md font-medium text-gray-700">Description</label>
                    <textarea id="About" name="about" rows={4} className="pl-3 mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"></textarea>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="Category" className="block text-md font-medium text-gray-700">Category</label>
                    <select id="Category" name="category" className="pl-3 mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm">
                      <option>Category 1</option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                      <option>Category 4</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="MarketingAccept" className="flex gap-4">
                      <input type="checkbox" id="MarketingAccept" name="marketing_accept" className="size-5 rounded-md border-gray-200 bg-white shadow-sm"/>
                      <span className="text-sm text-gray-700">I want to receive emails about events, product updates and company announcements.</span>
                    </label>
                  </div>

                  <div className="col-span-6">
                    <p className="text-sm text-gray-500">
                      By creating an account, you agree to our &nbsp;
                      <a href="#" className="text-gray-700 underline">terms and conditions</a>
                      &nbsp; and &nbsp;
                      <a href="#" className="text-gray-700 underline">privacy policy</a>.
                    </p>
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button type="submit" className="inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-blue-500">
                      Create an account
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                      <a href="signin.html" className="text-gray-700 underline">Log in</a>.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    
    
    
    
    </>
  )
}

export default page