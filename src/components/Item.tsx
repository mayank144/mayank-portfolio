import Link from "next/link";
export interface ItemProps {
  href: string;
  title: string;
}

export default function Item({ href, title }: Readonly<ItemProps>) {
  return (
    <li>
      <Link
        href={"#" + href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p=0 hover:text-white"
      >
        {title}
      </Link>
    </li>
  );
}
