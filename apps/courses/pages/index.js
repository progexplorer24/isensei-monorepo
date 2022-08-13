import SiteHeader from "@/components/SiteHeader";
import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";

const topics = [
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
        imageUrl: "/static/images/next.svg",
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
        imageUrl: "/static/images/docker.svg",
        sections: 3,
        lectures: 2,
        title: "Docker Mastery",
        price: 3900,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/kubernetes.svg",
        sections: 4,
        lectures: 1,
        title: "Become Kubernetes Captain",
        price: 4900,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl: "/static/images/node.svg",
        sections: 5,
        lectures: 4,
        title: "Node.js Ninja",
        price: 9900,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl: "/static/images/bash.svg",
        sections: 3,
        lectures: 2,
        title: "Learn Bash",
        price: 12900,
        reviewCount: 34,
        rating: 4,
      },
    ],
  },
  // {
  //   title: "Data Science",
  //   description: "It's about time to join A.I. era!",
  //   properties: [
  //     {
  //       imageUrl: "/static/images/phoenix-1.jpg",
  //       sections: 3,
  //       lectures: 2,
  //       title: "Modern home in city center",
  //       price: 190000,
  //       reviewCount: 34,
  //       rating: 4,
  //     },
  //     {
  //       imageUrl: "/static/images/phoenix-2.jpg",
  //       sections: 4,
  //       lectures: 1,
  //       title: "Quiet living outside the city",
  //       price: 175000,
  //       reviewCount: 12,
  //       rating: 3,
  //     },
  //     {
  //       imageUrl: "/static/images/phoenix-3.jpg",
  //       sections: 5,
  //       lectures: 4,
  //       title: "Renovated apartment uptown",
  //       price: 200000,
  //       reviewCount: 54,
  //       rating: 5,
  //     },
  //     {
  //       imageUrl: "/static/images/phoenix-4.jpg",
  //       sections: 3,
  //       lectures: 2,
  //       title: "Family home in the suburbs",
  //       price: 115000,
  //       reviewCount: 34,
  //       rating: 4,
  //     },
  //   ],
  // },
  {
    title: "Crypto",
    description: "Learn and understand the next monetary revolution!",
    properties: [
      {
        imageUrl: "/static/images/ipfs.svg",
        sections: 3,
        lectures: 2,
        title: "Master IPFS Protocol",
        price: 9999,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/solidity.svg",
        sections: 3,
        lectures: 2,
        title: "Explore Solidity",
        price: 10900,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/truffle.svg",
        sections: 15,
        lectures: 49,
        title: "Test With Truffle",
        price: 20000,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl: "/static/images/hardhat.svg",
        sections: 3,
        lectures: 2,
        title: "Become Hardhat Master",
        price: 9999,
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
        imageUrl: "/static/images/julia.svg",
        sections: 3,
        lectures: 2,
        title: "Have Fun With Julia",
        price: 8999,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/haskell.svg",
        sections: 3,
        lectures: 2,
        title: "Grow with Haskell",
        price: 11900,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/go.svg",
        sections: 5,
        lectures: 4,
        title: "Explore Go",
        price: 19900,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl: "/static/images/ocaml.svg",
        sections: 4,
        lectures: 1,
        title: "Become OCaml Ninja",
        price: 7500,
        reviewCount: 12,
        rating: 3,
      },
    ],
  },
];

export default function Home() {
  const renderCourses = (topics) => {
    return topics.map((topic, i) => {
      return (
        <div key={i} className={i > 0 ? "mt-6" : ""}>
          <div className="px-4 xl:px-8">
            <h3 className="text-xl text-gray-900">{topic.title}</h3>
            <p className="text-gray-600">{topic.description}</p>
          </div>
          <div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
            <div className="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
              {topic.properties.map((property, i) => {
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
      className="min-h-screen bg-gray-200 antialiased xl:flex xl:h-screen xl:flex-col"
    >
      <SiteHeader class="xl:flex-shrink-0" />
      <div className="xl:flex xl:flex-1 xl:overflow-y-hidden">
        <SearchFilters />
        <main className="bg-gray-50 py-6 xl:flex-1 xl:overflow-x-hidden">
          {renderCourses(topics)}
        </main>
      </div>
    </div>
  );
}
