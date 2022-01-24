import SiteHeader from "@/components/SiteHeader";
import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";

const locations = [
  {
    title: "Web Development",
    description: "Build Internet of the Future!",
    properties: [
      {
        imageUrl: "/static/images/rescript.svg",
        sections: 3,
        lectures: 2,
        title: "Learn Rescript",
        price: 3900,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/tailwind.svg",
        sections: 4,
        lectures: 1,
        title: "Explore TailwindCSS",
        price: 4900,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl: "/static/images/nextjs.svg",
        sections: 5,
        lectures: 4,
        title: "Master Next.js",
        price: 9900,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl: "/static/images/rust.svg",
        sections: 3,
        lectures: 2,
        title: "Grow with Rust",
        price: 12900,
        reviewCount: 34,
        rating: 4,
      },
    ],
  },
  {
    title: "Backend & DevOps",
    description: "Build Internet of the Future!",
    properties: [
      {
        imageUrl: "/static/images/rescript.svg",
        sections: 3,
        lectures: 2,
        title: "Containers",
        price: 3900,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/tailwind.svg",
        sections: 4,
        lectures: 1,
        title: "Kubernetes",
        price: 4900,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl: "/static/images/nextjs.svg",
        sections: 5,
        lectures: 4,
        title: "Node.js",
        price: 9900,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl: "/static/images/rust.svg",
        sections: 3,
        lectures: 2,
        title: "Deno",
        price: 12900,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/rust.svg",
        sections: 3,
        lectures: 2,
        title: "Bash",
        price: 12900,
        reviewCount: 34,
        rating: 4,
      },
    ],
  },
  {
    title: "Data Science",
    description: "It's about time to join A.I. era!",
    properties: [
      {
        imageUrl: "/static/images/phoenix-1.jpg",
        sections: 3,
        lectures: 2,
        title: "Modern home in city center",
        price: 190000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/phoenix-2.jpg",
        sections: 4,
        lectures: 1,
        title: "Quiet living outside the city",
        price: 175000,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl: "/static/images/phoenix-3.jpg",
        sections: 5,
        lectures: 4,
        title: "Renovated apartment uptown",
        price: 200000,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl: "/static/images/phoenix-4.jpg",
        sections: 3,
        lectures: 2,
        title: "Family home in the suburbs",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
    ],
  },
  {
    title: "Crypto",
    description: "Learn and understand the next monetary revolution!",
    properties: [
      {
        imageUrl: "/static/images/dallas-1.jpg",
        sections: 3,
        lectures: 2,
        title: "Ethereum",
        price: 190000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/dallas-1.jpg",
        sections: 3,
        lectures: 2,
        title: "Solidity",
        price: 190000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/dallas-2.jpg",
        sections: 4,
        lectures: 1,
        title: "Polygon",
        price: 175000,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl: "/static/images/dallas-3.jpg",
        sections: 5,
        lectures: 4,
        title: "Solana",
        price: 200000,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl: "/static/images/dallas-4.jpg",
        sections: 3,
        lectures: 2,
        title: "Polkadot",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/dallas-4.jpg",
        sections: 3,
        lectures: 2,
        title: "Hardhat",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/dallas-4.jpg",
        sections: 3,
        lectures: 2,
        title: "Anchor",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/dallas-4.jpg",
        sections: 3,
        lectures: 2,
        title: "IPFS",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/dallas-4.jpg",
        sections: 3,
        lectures: 2,
        title: "Filecoin",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
    ],
  },
  {
    title: "Paradigm Shift",
    description: "Surf through new paradigms!",
    properties: [
      {
        imageUrl: "/static/images/dallas-1.jpg",
        sections: 3,
        lectures: 2,
        title: "Haskell",
        price: 190000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/dallas-2.jpg",
        sections: 4,
        lectures: 1,
        title: "OCaml",
        price: 175000,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl: "/static/images/dallas-3.jpg",
        sections: 5,
        lectures: 4,
        title: "Go",
        price: 200000,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl: "/static/images/dallas-4.jpg",
        sections: 3,
        lectures: 2,
        title: "Rust",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/dallas-4.jpg",
        sections: 3,
        lectures: 2,
        title: "julia",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/dallas-4.jpg",
        sections: 3,
        lectures: 2,
        title: "Nim",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
    ],
  },
];

export default function Home() {
  const renderLocations = (locations) => {
    return locations.map((location, i) => {
      return (
        <div key={i} className={i > 0 ? "mt-6" : ""}>
          <div className="px-4 xl:px-8">
            <h3 className="text-gray-900 text-xl">{location.title}</h3>
            <p className="text-gray-600">{location.description}</p>
          </div>
          <div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
            <div className="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
              {location.properties.map((property, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      i > 0 ? "mt-10 sm:ml-4" : ""
                    } sm:mt-0 sm:w-80 sm:flex-shrink-0`}
                  >
                    <PropertyCard property={property} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      id="app"
      className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen"
    >
      <SiteHeader class="xl:flex-shrink-0" />
      <div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
        <SearchFilters />
        <main className="py-6 xl:flex-1 xl:overflow-x-hidden bg-gray-50">
          {renderLocations(locations)}
        </main>
      </div>
    </div>
  );
}
