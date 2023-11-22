import React from "react";

function Footer() {
  return (
    <footer className="footer bg-gray-900">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-semibold">About Us</h4>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              auctor nibh in ipsum tristique, at hendrerit nisl lacinia.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="mt-4 footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <p className="mt-4">123 Street, City</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Follow Us</h4>
            <div className="flex mt-4">
              <a href="#" className="mr-4">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
