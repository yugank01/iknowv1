"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useWallet } from "@solana/wallet-adapter-react";

const Wallets = dynamic(() => import("../../components-integration/wallets"), {
    ssr: false,
});

const Navbar = () => {
    const [Toggle,setToggle]=useState(true);

    const handleClick = () => {
      setToggle(!Toggle);
    };
    const { wallets } = useWallet();

    console.log("check", wallets);

    return (
        <nav className="z-[10] flex justify-evenly items-center px-8 py-8 w-full absolute">
            <Link href="/">
                <Image
                    src="/iks-logo.png"
                    width="252"
                    height="300"
                    className=" w-[75%]"
                    alt="I know spots logo"
                />
            </Link>
            <div className="md:flex gap-[2rem] lg:gap-[5rem] justify-center items-center hidden">
                <Link href="/dashboard/active">
                    <p className="hoverUnderline">Dashboard</p>
                </Link>

                <Link href="#howitworks">
                    <p className="hoverUnderline">Product</p>
                </Link>
                {/* <Link href="/infra">
                    <p>Infra</p>
                </Link> */}

                <Link
                    target="_blank"
                    href="https://docs.google.com/document/d/1Ayzu2fjTUuCTS3TXmCySz6xfIWffbJshLgd0Uh47wS0/edit"
                >
                    <p className="hoverUnderline">Docs</p>
                </Link>
                <Link href="/support">
                    <p className="hoverUnderline">Support</p>
                </Link>
            </div>

            <Link href="/">
                <p className="border border-[#C584F5] px-2 sm:px-4 py-1 sm:py-2 text-[0.75rem] sm:text-[1rem] rounded-lg sm:rounded-xl ">
                    {/* Connect Wallet */}
                    <Wallets />
                </p>
            </Link>

            {Toggle ? <img src="/hamburger (1).png" alt="" className="z-0 md:hidden ml-4 h-[20px]" onClick={handleClick} /> : <img src="/close.png" alt="" className="z-0 md:hidden ml-4 h-[20px]" onClick={handleClick}/>}
            
            <div className={ `delay-300 md:hidden flex text-center gap-16 p-12 h-screen bg-black/90 w-full fixed top-[80px] text-white text-left  flex-col ${Toggle? 'right-[100%]':'left-[100%]}'}`}>
                <Link href="/dashboard/active">
                    <p className="hoverUnderline">Dashboard</p>
                </Link>

                <Link href="#howitworks">
                    <p className="hoverUnderline">Product</p>
                </Link>
                {/* <Link href="/infra">
                    <p>Infra</p>
                </Link> */}

                <Link
                    target="_blank"
                    href="https://docs.google.com/document/d/1Ayzu2fjTUuCTS3TXmCySz6xfIWffbJshLgd0Uh47wS0/edit"
                >
                    <p className="hoverUnderline">Docs</p>
                </Link>
                <Link href="/support">
                    <p className="hoverUnderline">Support</p>
                </Link>
            </div>
        </nav>
    );
};
export default Navbar;
