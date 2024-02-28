import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import FooterComponent from "./FooterComponent";

const Footer = () => {
  return (
    <div className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="hilink-logo.svg" alt="logo" width={84} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, i) => (
              <FooterComponent title={columns.title} key={i}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href={"/"} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterComponent>
            ))}

            <div className="flex flex-col gap-5">
              <FooterComponent title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, i) => (
                  <Link
                    href={"/"}
                    key={i}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterComponent>
            </div>
            <div className="flex flex-col gap-5">
              <FooterComponent title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link
                      href={"/"}
                      key={link}
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterComponent>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20"/>
        <p className="regular-14 w-full text-center text-gray-30">2024 - 99Cents travels | Inspired by the original design by 
        <Link href="https://www.instagram.com/javascriptmastery" className="underline ml-1">@javascriptmastery</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
