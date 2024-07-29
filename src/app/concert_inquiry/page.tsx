import React from 'react';

function Page() {
  return (
    <>
     <div className="bg-gray-100">
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                <img
                    className="w-full rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
                    alt="Concert Image"
                />
            </div>
            <div className="w-full lg:w-1/3 px-4">
                <h1 className="text-4xl font-bold mb-4">John Smith Live in Concert</h1>
                <p className="text-lg mb-6">Join us for an unforgettable evening of music with John Smith.</p>
                <div className="mb-6">
                    <p className="text-xl font-bold mb-2">When:</p>
                    <p className="text-lg">Friday, April 15th at 8:00 PM</p>
                </div>
                <div className="mb-6">
                    <p className="text-xl font-bold mb-2">Where:</p>
                    <p className="text-lg">The Fillmore Auditorium</p>
                    <p className="text-lg">1999 Mori Blvd, Delhi</p>
                </div>
                <div className="mb-6">
    <p className="text-xl font-bold mb-2">Tickets:</p>
    <p className="text-lg">₹2,500 - General Admission</p>
    <p className="text-lg">₹5,500 - VIP</p>
</div>

                <button
                    className="bg-indigo-800 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Buy Tickets
                </button>
            </div>
        </div>
    </div>
</div>
    </>
  );
}

export default Page;
