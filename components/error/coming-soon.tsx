"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOldOutlined,
  PinterestOutlined,
  LinkedinOutlined,
} from "@lineiconshq/free-icons";



const THIRTY_FIVE_DAYS = 35 * 24 * 60 * 60 * 1000;

const getExpiryTime = () => {
  if (typeof window === "undefined") return Date.now();

  const storedExpiry = localStorage.getItem("comingSoonExpiry");

  if (storedExpiry) {
    return Number(storedExpiry);
  }

  const newExpiry = Date.now() + THIRTY_FIVE_DAYS;
  localStorage.setItem("comingSoonExpiry", newExpiry.toString());
  return newExpiry;
};

export default function ComingSoonPage() {
  const [expiryTime] = useState<number>(getExpiryTime());

  const [countdown, setCountdown] = useState({
    days: "00",
    hrs: "00",
    min: "00",
    sec: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = expiryTime - now;

      if (distance <= 0) {
        clearInterval(timer);
        setCountdown({
          days: "00",
          hrs: "00",
          min: "00",
          sec: "00",
        });
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hrs: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          .toString()
          .padStart(2, "0"),
        min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, "0"),
        sec: Math.floor((distance % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryTime]);

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/coming-soon-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

      <div className="relative z-10 w-full max-w-2xl bg-white/95 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-40 h-16">
            <Image
              src="/images/logo/logo.png"
              alt="DreamsPOS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <p className="text-gray-500 font-medium uppercase tracking-widest text-sm mb-2">
          Our Website is
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-[#FE9F43]">COMING</span>{" "}
          <span className="text-[#1B2850]">SOON</span>
        </h1>

        <p className="text-gray-500 max-w-md mx-auto mb-10 text-sm">
          Please check back later, We are working hard to get everything just
          right.
        </p>

        <div className="flex justify-center gap-2 md:gap-4 mb-10">
          {[
            { label: "Days", value: countdown.days },
            { label: "Hrs", value: countdown.hrs },
            { label: "Min", value: countdown.min },
            { label: "Sec", value: countdown.sec },
          ].map((item, index, array) => (
            <div key={item.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="bg-gray-50 border border-gray-100 rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-sm">
                  <span className="text-2xl md:text-3xl font-bold text-gray-800">
                    {item.value}
                  </span>
                </div>
                <span className="text-xs text-gray-400 mt-2 font-semibold uppercase">
                  {item.label}
                </span>
              </div>
              {index !== array.length - 1 && (
                <span className="text-2xl font-bold text-gray-300 mx-1 md:mx-2 mb-6">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto mb-8">
          <p className="text-sm font-bold text-gray-700 mb-3">
            Subscribe to get notified!
          </p>
          <div className="flex gap-2 bg-white border border-gray-200 rounded-lg p-1.5 shadow-sm">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="border-none focus-visible:ring-0 text-gray-600"
            />
            <Button className="bg-[#FE9F43] hover:bg-[#f09a42] text-white font-bold px-6">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {[
            { icon: FacebookOutlined, color: "#1877F2" },
            { icon: InstagramOutlined, color: "#E4405F" },
            { icon: TwitterOldOutlined, color: "#1DA1F2" },
            { icon: PinterestOutlined, color: "#BD081C" },
            { icon: LinkedinOutlined, color: "#0077B5" },
          ].map((social, i) => (
            <a
              key={i}
              href="#"
              className="p-2 transition-transform hover:scale-110"
            >
              <Lineicons icon={social.icon} size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
