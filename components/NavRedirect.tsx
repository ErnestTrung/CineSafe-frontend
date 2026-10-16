"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavRedirectProps {
  label: string;
  href: string;
}

export default function NavRedirect(props: NavRedirectProps) {
  const pathname: string = usePathname();

  return (
    <Link href={props.href} className={
      `rounded-xl pl-6 pr-6 pt-2 pb-2 text-nowrap
      ${pathname == props.href ? "bg-[#dce9ff] text-[#2c17b5]" : "text-[#494856]"}
      transition hover:bg-[#dce9ff] hover:text-[#2c17b5]`
    }>
      {props.label}
    </Link>
  )
}
