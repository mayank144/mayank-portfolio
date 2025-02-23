import Image from "next/image";

export default function MayankBiodata() {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-gradient-to-br from-blue-700 to-purple-900 rounded-xl shadow-2xl text-white font-sans animate-fade-in-up">
      <div className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden">
        <div className="relative w-full h-56 sm:h-64 bg-gradient-to-r from-blue-800 to-purple-700 flex justify-center items-center animate-slide-in">
          <a
            href="https://photos.app.goo.gl/JYsABwGtoJvTQz2C8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/profile_image.jpg"
              alt="Profile Picture"
              width={160}
              height={160}
              className="rounded-full border-4 border-white shadow-lg object-cover w-32 h-32 sm:w-40 sm:h-40 cursor-pointer transition-transform duration-500 hover:scale-110 hover:rotate-3 animate-bounce"
            />
          </a>
        </div>

        <div className="p-6 sm:p-8 text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900">
            Mayank Goyal
          </h2>
          <p className="text-md sm:text-lg text-gray-600 mt-2">
            Software Engineer | Google | Bangalore, India
          </p>
        </div>

        <div className="px-6 sm:px-8 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-md sm:text-lg animate-fade-in">
          <div>
            <strong>Age:</strong> 26
          </div>
          <div>
            <strong>Birth Date:</strong> 2nd Nov 1998, 10:15 PM
          </div>
          <div>
            <strong>Height:</strong> 5&apos;10&quot;
          </div>
          <div>
            <strong>Religion:</strong> Hindu
          </div>
          <div>
            <strong>Caste:</strong> Agarwal
          </div>
          <div>
            <strong>Diet:</strong> Vegetarian
          </div>
          <div>
            <strong>Education:</strong> B.Tech in Computer Science
          </div>
          <div>
            <strong>Profession:</strong> Software Engineer
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 bg-white text-gray-900 rounded-xl shadow-md p-6 sm:p-8 animate-slide-in">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 border-b pb-2 sm:pb-3 mb-4 sm:mb-5">
          Family Details
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 text-md sm:text-lg animate-fade-in">
          <div>
            <strong>Father:</strong> Manoj Goyal (Businessman)
          </div>
          <div>
            <strong>Mother:</strong> Premlata Goyal (Housewife)
          </div>
          <div>
            <strong>Brother:</strong> Businessman
          </div>
          <div>
            <strong>Sister:</strong> Still Studying
          </div>
          <div>
            <strong>Family Location:</strong> Delhi (Currently working in
            Bangalore)
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 bg-white text-gray-900 rounded-xl shadow-md p-6 sm:p-8 animate-slide-in">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 border-b pb-2 sm:pb-3 mb-4 sm:mb-5">
          Hobbies & Contact
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-md sm:text-lg animate-fade-in">
          <div>
            <strong>Hobbies:</strong> Reading, Traveling, Music
          </div>
          <div className="col-span-2">
            <strong>Contact:</strong> mayankgoel756@gmail.com | +91-9350763030
          </div>
        </div>
      </div>
    </div>
  );
}
