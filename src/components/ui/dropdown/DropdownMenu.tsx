import { Link } from "react-router-dom";

function DropdownMenu({items}:any) {
  return (
    <div className="relative w-72 bg-white text-gray-800 rounded-lg shadow-xl py-3 z-50">
       {items.map((item:any,index:any) => (
          // <a key={index} href={item.link || '#'}className="block px-5 py-2 hover:bg-purple-50">
          //       {item.label}
          // </a>
          // <Link key={index} to={item.link || '#'} className="block px-5 py-2 hover:bg-purple-50"/>
          <Link key={index} to={item.link || '#'} className="block px-5 py-2 hover:bg-purple-50">{item.label}</Link>
       ))}

    </div>
  );
}

export default DropdownMenu;
