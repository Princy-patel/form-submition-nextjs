import Link from "next/link";

function RestaurantNavbar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={"/restaurant/cnf"} className="mr-7">
        Overview
      </Link>
      <Link href={"/restaurant/cnf/menu"} className="mr-7">
        Menu
      </Link>
    </nav>
  );
}

export default RestaurantNavbar;
