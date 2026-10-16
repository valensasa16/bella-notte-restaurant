
"use client";

import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    "All",
    "Antipasti",
    "Pasta",
    "Main Courses",
    "Desserts",
  ];
  return (
    <>
      {/* Navigation */}

      <header className="absolute left-0 top-0 z-20 w-full border-b border-white/20 bg-black/40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-12">
          <a
            href="#home"
            className="font-serif text-xl tracking-widest text-[#C6A667] md:text-2xl"
          >
            BELLA NOTTE
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-xs tracking-widest text-white md:flex">
            <a href="#home" className="hover:text-[#C6A667]">
              HOME
            </a>
            <a href="#about" className="hover:text-[#C6A667]">
              OUR STORY
            </a>
            <a href="#menu" className="hover:text-[#C6A667]">
              MENU
            </a>
            <a href="#contact" className="hover:text-[#C6A667]">
              CONTACT
            </a>
          </div>

          <a
            href="#reservations"
            className="hidden border border-[#C6A667] px-5 py-3 text-xs tracking-widest text-[#C6A667] transition hover:bg-[#C6A667] hover:text-black md:block"
          >
            RESERVE A TABLE
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2 md:hidden"
          >
            <span className="h-0.5 w-6 bg-[#C6A667]" />
            <span className="h-0.5 w-6 bg-[#C6A667]" />
            <span className="h-0.5 w-6 bg-[#C6A667]" />
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="flex flex-col gap-6 border-t border-white/15 bg-[#121212] px-6 py-8 text-sm tracking-widest text-white md:hidden"
          >
            {[
              { label: "HOME", href: "#home" },
              { label: "OUR STORY", href: "#about" },
              { label: "MENU", href: "#menu" },
              { label: "CONTACT", href: "#contact" },
              { label: "RESERVE A TABLE", href: "#reservations" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-[#C6A667]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>


      {/* Hero */}
      <main
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-6 pt-28 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85')",
        }}
      >
        <p className="mb-5 text-xs tracking-[0.4em] text-[#C6A667]">
          WELCOME TO
        </p>

        <h1 className="font-serif text-6xl text-[#C6A667] md:text-8xl">
          BELLA NOTTE
        </h1>

        <p className="mt-6 text-xl">
          Authentic Italian Dining Experience
        </p>

        <a
          href="#reservations"
          className="mt-10 border border-[#C6A667] px-8 py-4 text-[#C6A667] transition hover:bg-[#C6A667] hover:text-black"
        >
          RESERVE A TABLE
        </a>
      </main>

      {/* Temporary destination sections */}
      
{/* Our Story */}
<section
  id="about"
  className="bg-[#F5F0E8] px-6 py-24 text-[#121212] md:px-12 lg:py-32"
>
  <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 lg:gap-24">

    {/* Restaurant Image */}
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1000&q=85"
        alt="Italian culinary experience"
        className="h-[450px] w-full object-cover md:h-[580px]"
      />

      <div className="absolute -bottom-5 -right-3 border border-[#C6A667] px-6 py-4 text-center backdrop-blur-md md:-right-6">
        <p className="font-serif text-2xl text-[#C6A667]">
          La Dolce Vita
        </p>
      </div>
    </div>

    {/* Restaurant Story */}
    <div>
      <p className="mb-5 text-xs tracking-[0.35em] text-[#A1844C]">
        OUR STORY
      </p>

      <h2 className="mb-7 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
        A Passion for
        <br />
        <span className="italic text-[#A1844C]">
          Italian Tradition
        </span>
      </h2>

      <div className="mb-8 h-px w-20 bg-[#C6A667]" />

      <p className="mb-6 text-base leading-8 text-gray-600">
        At Bella Notte, we believe that dining is more than
        just a meal. It is an experience that brings people
        together through authentic flavors, warm hospitality,
        and unforgettable moments.
      </p>

      <p className="mb-10 text-base leading-8 text-gray-600">
        Inspired by the timeless traditions of Italy,
        our kitchen celebrates fresh ingredients,
        handcrafted recipes, and the art of sharing
        exceptional food with the people you love.
      </p>

      <a
        href="#menu"
        className="inline-block border-b border-[#A1844C] pb-2 text-xs font-semibold tracking-[0.2em] text-[#A1844C] transition hover:text-[#121212]"
      >
        DISCOVER OUR MENU →
      </a>
    </div>
  </div>
</section>

      
{/* Italian Menu */}
<section
  id="menu"
  className="bg-[#121212] px-6 py-16 text-[#F5F0E8] md:px-12 md:py-24 lg:py-32"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 text-center md:mb-16">
      <p className="mb-5 text-xs tracking-[0.35em] text-[#C6A667]">
        A TASTE OF ITALY
      </p>

      <h2 className="font-serif text-5xl md:text-6xl">
        Our <span className="italic text-[#C6A667]">Menu</span>
      </h2>

      <div className="mx-auto my-7 h-px w-20 bg-[#C6A667]" />

      <p className="mx-auto max-w-xl leading-8 text-gray-400">
        Discover a selection of Italian classics, crafted with
        passion and inspired by timeless culinary traditions.
      </p>
    </div>

{/* Menu Category Filters */}
<div className="mb-8 flex flex-wrap justify-center gap-3 md:mb-12">
  {categories.map((category) => (
    <button
      key={category}
      type="button"
      onClick={() => setActiveCategory(category)}
      className={`border px-5 py-3 text-xs tracking-widest transition ${
        activeCategory === category
          ? "border-[#C6A667] bg-[#C6A667] text-[#121212]"
          : "border-white/20 text-gray-300 hover:border-[#C6A667] hover:text-[#C6A667]"
      }`}
    >
      {category.toUpperCase()}
    </button>
  ))}
</div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Burrata Caprese",
          category: "ANTIPASTI",
          price: "$19",
          description:
            "Fresh burrata, heirloom tomatoes, basil and extra virgin olive oil.",
          image:
            "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=900&q=85",
        },
        {
          name: "Truffle Tagliatelle",
          category: "PASTA",
          price: "$32",
          description:
            "Handmade tagliatelle, creamy parmesan sauce and black truffle.",
          image:
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
        },
        {
          name: "Margherita Pizza",
          category: "CLASSICS",
          price: "$24",
          description:
            "San Marzano tomatoes, fresh mozzarella and aromatic basil.",
          image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
        },
        {
          name: "Spaghetti Carbonara",
          category: "PASTA",
          price: "$29",
          description:
            "Traditional Roman pasta with pecorino, egg and guanciale.",
          image:
            "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
        },
        {
          name: "Risotto ai Funghi",
          category: "MAIN COURSE",
          price: "$34",
          description:
            "Creamy arborio rice with wild mushrooms and parmesan.",
          image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
        },
        {
          name: "Classic Tiramisu",
          category: "DESSERT",
          price: "$15",
          description:
            "Espresso-soaked ladyfingers with mascarpone and cocoa.",
          image:
            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85",
        },
      ].filter((dish) => {
        if (activeCategory === "All") return true;

        if (activeCategory === "Main Courses") {
        return (
         dish.category === "MAIN COURSE" ||
         dish.category === "CLASSICS"
      );
      }

        if (activeCategory === "Desserts") {
        return dish.category === "DESSERT";
      }

       return dish.category === activeCategory.toUpperCase();
      }).map((dish) => (
        <article
          key={dish.name}
          className="group overflow-hidden border border-white/10 bg-[#1C1C1C]"
        >
          <div className="h-64 overflow-hidden">
            <img
              src={dish.image}
              alt={dish.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-7">
            <p className="mb-3 text-xs tracking-[0.25em] text-[#C6A667]">
              {dish.category}
            </p>

            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="font-serif text-2xl">
                {dish.name}
              </h3>
              <span className="whitespace-nowrap text-[#C6A667]">
                {dish.price}
              </span>
            </div>

            <p className="text-sm leading-7 text-gray-400">
              {dish.description}
            </p>
          </div>
        </article>
      ))}
    </div>

    <p className="mt-10 text-center text-xs text-gray-500">
      Sample menu and prices in CAD for portfolio demonstration.
    </p>
  </div>
</section>
      
{/* Reservations Section */}
<section
  id="reservations"
  className="bg-[#F5F0E8] px-6 py-24 text-[#121212] md:px-12 lg:py-32"
>
  <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

    {/* Reservation Information */}
    <div>
      <p className="mb-5 text-xs tracking-[0.35em] text-[#A1844C]">
        AN UNFORGETTABLE EVENING
      </p>

      <h2 className="mb-7 font-serif text-5xl leading-tight md:text-6xl">
        Reserve Your
        <br />
        <span className="italic text-[#A1844C]">
          Table
        </span>
      </h2>

      <div className="mb-8 h-px w-20 bg-[#C6A667]" />

      <p className="mb-8 max-w-lg leading-8 text-gray-600">
        Join us for an unforgettable Italian dining experience.
        Whether you are celebrating a special occasion or
        enjoying a romantic evening, Bella Notte welcomes you.
      </p>

      <div className="space-y-5">
        <div>
          <p className="text-xs tracking-widest text-[#A1844C]">
            DINNER HOURS
          </p>
          <p className="mt-2 text-gray-700">
            Tuesday – Sunday | 5:00 PM – 10:00 PM
          </p>
        </div>

        <div>
          <p className="text-xs tracking-widest text-[#A1844C]">
            LOCATION
          </p>
          <p className="mt-2 text-gray-700">
            Calgary, Alberta, Canada
          </p>
        </div>
      </div>
    </div>

    {/* Reservation Form */}
    <div className="border border-[#D8C9AB] bg-white p-8 shadow-xl md:p-12">
      <p className="mb-3 text-center text-xs tracking-[0.3em] text-[#A1844C]">
        YOUR EVENING STARTS HERE
      </p>

      <h3 className="mb-9 text-center font-serif text-3xl">
        Book a Table
      </h3>

      <form
        className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          window.alert(
            "This is a portfolio demo. No reservation has been made."
          );
        }}
      >
        <div>
          <label
            htmlFor="guest-name"
            className="mb-2 block text-xs tracking-widest text-gray-600"
          >
            FULL NAME
          </label>
          <input
            id="guest-name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full border border-gray-300 bg-white px-4 py-3 text-[#121212] outline-none focus:border-[#A1844C]"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="reservation-date"
              className="mb-2 block text-xs tracking-widest text-gray-600"
            >
              DATE
            </label>
            <input
              id="reservation-date"
              type="date"
              required
              className="w-full border border-gray-300 bg-white px-3 py-3 text-[#121212] outline-none focus:border-[#A1844C]"
            />
          </div>

          <div>
            <label
              htmlFor="reservation-time"
              className="mb-2 block text-xs tracking-widest text-gray-600"
            >
              TIME
            </label>
            <select
              id="reservation-time"
              required
              defaultValue=""
              className="w-full border border-gray-300 bg-white px-3 py-3 text-[#121212] outline-none focus:border-[#A1844C]"
            >
              <option value="" disabled>
                Select time
              </option>
              <option>5:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
              <option>9:00 PM</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="guests"
            className="mb-2 block text-xs tracking-widest text-gray-600"
          >
            NUMBER OF GUESTS
          </label>
          <select
            id="guests"
            required
            defaultValue=""
            className="w-full border border-gray-300 bg-white px-4 py-3 text-[#121212] outline-none focus:border-[#A1844C]"
          >
            <option value="" disabled>
              Select guests
            </option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
              <option key={number} value={number}>
                {number} {number === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#121212] px-6 py-4 text-xs font-semibold tracking-[0.2em] text-[#C6A667] transition hover:bg-[#A1844C] hover:text-white"
        >
          CHECK RESERVATION
        </button>

        <p className="text-center text-xs leading-5 text-gray-500">
          Portfolio demonstration only.
          No real reservations are accepted.
        </p>
      </form>
    </div>
  </div>
</section>

      
{/* Contact Section */}
<section
  id="contact"
  className="bg-[#161616] px-6 py-20 text-[#F5F0E8] md:px-12 lg:py-28"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 text-center">
      <p className="mb-4 text-xs tracking-[0.35em] text-[#C6A667]">
        WE LOOK FORWARD TO SEEING YOU
      </p>
      <h2 className="font-serif text-5xl md:text-6xl">
        Visit <span className="italic text-[#C6A667]">Us</span>
      </h2>
      <div className="mx-auto mt-7 h-px w-20 bg-[#C6A667]" />
    </div>

    <div className="grid gap-12 text-center md:grid-cols-3">
      <div>
        <h3 className="mb-5 font-serif text-2xl text-[#C6A667]">
          Location
        </h3>
        <p className="leading-8 text-gray-400">
          Calgary, Alberta
          <br />
          Canada
        </p>
      </div>

      <div>
        <h3 className="mb-5 font-serif text-2xl text-[#C6A667]">
          Opening Hours
        </h3>
        <p className="leading-8 text-gray-400">
          Tuesday – Sunday
          <br />
          5:00 PM – 10:00 PM
          <br />
          Monday – Closed
        </p>
      </div>

      <div>
        <h3 className="mb-5 font-serif text-2xl text-[#C6A667]">
          Reservations
        </h3>
        <p className="mb-5 leading-8 text-gray-400">
          Plan your next unforgettable evening.
        </p>
        <a
          href="#reservations"
          className="inline-block border-b border-[#C6A667] pb-2 text-xs tracking-widest text-[#C6A667]"
        >
          BOOK YOUR TABLE →
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#101010] px-6 py-10 text-center">
        <a
          href="#home"
          className="font-serif text-3xl tracking-widest text-[#C6A667]"
        >
          BELLA NOTTE
        </a>

        <p className="mt-4 text-sm text-gray-400">
          Authentic Italian Dining Experience
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-6 text-xs tracking-widest text-gray-400">
          <a href="#home" className="hover:text-[#C6A667]">
            HOME
          </a>
          <a href="#about" className="hover:text-[#C6A667]">
            OUR STORY
          </a>
          <a href="#menu" className="hover:text-[#C6A667]">
            MENU
          </a>
          <a href="#reservations" className="hover:text-[#C6A667]">
            RESERVATIONS
          </a>
        </div>

        <div className="mx-auto my-8 h-px max-w-5xl bg-white/10" />

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Bella Notte.
          All rights reserved.
        </p>

        <p className="mt-3 text-xs text-gray-500">
          Fictional restaurant website — Portfolio demonstration.
        </p>
      </footer>

    </>
  );
}
