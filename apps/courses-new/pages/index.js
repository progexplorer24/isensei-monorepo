import SiteHeader from "@/components/SiteHeader";
import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";

const locations = [
  {
    title: "Los Angeles",
    description:
      "Live like the stars in these luxurious Southern California estates.",
    properties: [
      {
        imageUrl: "/static/images/los-angeles-1.jpg",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/los-angeles-2.jpg",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl: "/static/images/los-angeles-3.jpg",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl: "/static/images/los-angeles-4.jpg",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
    ],
  },
  {
    title: "Phoenix",
    description:
      "Escape the cold and enjoy great weather without breaking the bank.",
    properties: [
      {
        imageUrl: "/static/images/phoenix-1.jpg",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/phoenix-2.jpg",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl: "/static/images/phoenix-3.jpg",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl: "/static/images/phoenix-4.jpg",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
        price: 115000,
        reviewCount: 34,
        rating: 4,
      },
    ],
  },
  {
    title: "Dallas",
    description: "Experience Texas living in these awesome ranch-style homes.",
    properties: [
      {
        imageUrl: "/static/images/dallas-1.jpg",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000,
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "/static/images/dallas-2.jpg",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000,
        reviewCount: 12,
        rating: 3,
      },
      {
        imageUrl: "/static/images/dallas-3.jpg",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000,
        reviewCount: 54,
        rating: 5,
      },
      {
        imageUrl: "/static/images/dallas-4.jpg",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
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
        <main className="py-6 xl:flex-1 xl:overflow-x-hidden">
          {renderLocations(locations)}
        </main>
      </div>
    </div>
  );
}
