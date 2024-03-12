import { scrollToEmailTemplate } from "@/utils/utilityFunction";
export interface ItemProps {
  href: string;
  title: string;
}

export default function Item({ href, title }: Readonly<ItemProps>) {
  return (
    <button
      onClick={() => {
        scrollToEmailTemplate(href.slice(1));
      }}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] mobile:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </button>
  );
}
