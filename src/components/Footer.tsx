import React from "react";
import Container from "./ui/Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-6">
            <span className="font-black text-4xl text-primary">djoodi</span>
          </div>
          <p className="text-gray-400 max-w-md mb-8">
            Boost repeat visits, delight customers, and increase your sales with
            a simple, digital loyalty card—no apps, no hassle.
          </p>
          <div className="mt-2 pt-4 border-t border-gray-800 text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} djoodi. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
