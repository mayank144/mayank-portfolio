import React from "react";
import Item, { ItemProps } from "./Item";

export default function MenuOverlayed({ links }: any) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link: ItemProps, index: number) => (
        <li key={link.title}>
          <Item href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
