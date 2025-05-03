export default function Footer() {
    return (
      <footer className="bg-pink-600 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} SaferSpace Kenya. All rights reserved.</p>
  
          <div className="flex gap-4 mt-3 md:mt-0">
            <a
              href="mailto:saferspace.kenya@gmail.com"
              className="hover:underline text-green-100"
            >
              Email Us
            </a>
            <a
              href="#"
              className="hover:underline text-green-100"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    );
  }
  