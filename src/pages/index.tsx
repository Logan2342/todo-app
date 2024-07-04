import Header from "../components/Header";
import React from "react";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="w-full">
                <Header/>
            </header>
            <main className="flex-grow flex items-center justify-center p-24">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                    {/* Main content goes here */}
                </div>
            </main>
            <Footer/>
        </div>
    );
}
