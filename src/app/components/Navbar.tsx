import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <h3>Margin</h3>
        <div className="m-1 bg-yellow-100">hello from the dattabase</div>
        <div>Margin from top room the </div>
        <div>Margin from top room the </div>
        <div>Margin from top room the </div>
        <div>Margin from top room the </div>
      </div>
    </>
  );
};

export default Navbar;
