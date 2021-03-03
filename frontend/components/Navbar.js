import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
        <div className="flex mt-auto mb-auto">
      <Link href="/">
        <a>
          <img
            src="/fire_vinyl.png"
            alt="home"
            className="logo"
            height="80"
            width="80"
          />
        </a>
      </Link>
            <div className="mt-auto mb-auto">
            <h1 className="tracking-widest text-gray-900 text-3xl font-mono text-3xl text-black mb-1.5">
                🤖🎵
            </h1>
        </div>


        </div>
      <button className="snipcart-checkout flex items-center">
        <img src="/cart.svg" alt="Cart" />
        <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
      </button>
    </div>
  );
};

export default Navbar;
