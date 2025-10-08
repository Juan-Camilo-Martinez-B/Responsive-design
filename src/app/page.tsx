"use client";
import {
  Calendar,
  CirclePlus,
  Heart,
  Home,
  LogOut,
  Moon,
  Settings,
  Sun,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Aplica o quita la clase 'dark' del <html> global
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const parties = [
    {
      title: "Cadaver",
      desc: "Horror marathon",
      img: "/cadaver.jpg",
      users: ["/p1.jpg", "/p2.jpg", "/p3.jpg"],
    },
    {
      title: "Bladerunner 2049",
      desc: "Sci-fi binge",
      img: "/bladerunner.jpg",
      users: ["/p4.jpg", "/p5.jpg", "/p6.jpg"],
      active: true,
    },
    {
      title: "Monsters Inc.",
      desc: "Don't make me grow up",
      img: "/monsters.jpg",
      users: ["/p7.jpg", "/p8.jpg"],
    },
    {
      title: "Friends",
      desc: "We were on a break!",
      img: "/friends.jpg",
      users: ["/p9.jpg", "/p10.jpg", "/p11.jpg"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f9f9fb] dark:bg-[#111] text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_100px] min-h-screen">
        {/* ===== SIDEBAR IZQUIERDO ===== */}
        <aside className="hidden lg:flex flex-col justify-between border-r border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-[#1a1a1a] transition-colors duration-500">
          <div>
            <h1 className="text-2xl font-bold mb-8 text-red-500">Netflix.</h1>
            <nav className="space-y-4">
              <a href="#" className="flex items-center space-x-3 hover:text-red-500">
                <Home className="w-5 h-5" />
                <span>Browse</span>
              </a>
              <a href="#" className="flex items-center space-x-3 hover:text-red-500">
                <Heart className="w-5 h-5" />
                <span>Watchlist</span>
              </a>
              <a href="#" className="flex items-center space-x-3 hover:text-red-500">
                <Calendar className="w-5 h-5" />
                <span>Coming soon</span>
              </a>
            </nav>

            <div className="mt-8 space-y-4">
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">
                Social
              </h2>
              <a href="#" className="flex items-center space-x-3 hover:text-red-500">
                <User className="w-5 h-5" />
                <span>Friends</span>
              </a>
              <a href="#" className="flex items-center space-x-3 hover:text-red-500">
                <Users className="w-5 h-5" />
                <span>Parties</span>
              </a>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">
                General
              </h2>
              <a href="#" className="flex items-center space-x-3 hover:text-red-500">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </a>
              <a href="#" className="flex items-center space-x-3 hover:text-red-500">
                <LogOut className="w-5 h-5" />
                <span>Log out</span>
              </a>
            </div>
          </div>
        </aside>

        {/* ===== CONTENEDOR CENTRAL ===== */}
        <section className="p-4 md:p-8 overflow-y-auto transition-colors duration-500">
          {/* Botón de Modo Dark/Light */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-gray-700" />
                  <span className="text-sm">Dark Mode</span>
                </>
              )}
            </button>
          </div>

          {/* HERO PRINCIPAL */}
          <div className="relative w-full h-56 md:h-100 rounded-2xl overflow-hidden">
            <Image
              src="/thewitcher.jpg"
              alt="The Witcher"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                The Witcher
              </h2>
              <aside className="flex">
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-fit">
                  Watch
                </button>
                <button className="bg-gray-600 hover:bg-red-700 text-gray-100 px-4 py-2 rounded-md w-fit ml-2">
                  ➕
                </button>
              </aside>
            </div>
          </div>

          {/* ===== SECCIÓN PARTIES ===== */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Parties</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {parties.map((party) => (
                <div
                  key={party.title}
                  className={`relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                    party.active
                      ? "ring-2 ring-red-400 bg-gradient-to-b from-white to-red-50 dark:from-[#222] dark:to-[#331]"
                      : "bg-white dark:bg-[#1b1b1b]"
                  }`}
                >
                  <Image
                    src={party.img}
                    alt={party.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-40"
                  />
                  <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-3">
                    <div className="bg-white/90 dark:bg-[#222]/90 rounded-md p-2">
                      <p className="font-semibold text-sm">{party.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {party.desc}
                      </p>
                      <div className="flex -space-x-2 mt-2">
                        {party.users.map((u, i) => (
                          <Image
                            key={i}
                            src={u}
                            alt="user"
                            width={24}
                            height={24}
                            className="rounded-full border-2 border-white dark:border-gray-700 object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== SECCIÓN CONTINUE WATCHING ===== */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Continue watching</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: "Haunting of Hill House", img: "/hillhouse.jpg" },
                { title: "Ratchet", img: "/ratchet.jpg" },
                { title: "El Camino", img: "/elcamino.jpg" },
                { title: "Stranger Things", img: "/stranger.jpg" },
              ].map((show, i) => (
                <div
                  key={i}
                  className="relative rounded-lg overflow-hidden bg-white dark:bg-[#1b1b1b] shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <Image
                    src={show.img}
                    alt={show.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-40"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-2">
                    <p className="text-white text-sm">{show.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SIDEBAR DERECHO ===== */}
        <aside className="hidden lg:flex flex-col items-center border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] py-6 space-y-4 transition-colors duration-500">
          <div className="p-2">
            <CirclePlus className="w-10 h-10 text-gray-700 dark:text-gray-200 hover:text-red-600 cursor-pointer transition-colors duration-200" />
          </div>
          {["/p1.jpg", "/p2.jpg", "/p8.jpg", "/p5.jpg", "/p10.jpg", "/p9.jpg"].map(
            (img, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full overflow-hidden shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`party-${i}`}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
            )
          )}
        </aside>
      </div>
    </main>
  );
}
