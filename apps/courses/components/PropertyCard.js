import Image from "next/image";

const formattedPrice = (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(price / 100);
};

const PropertyCard = ({ property }) => {
  return (
    <div>
      <div className="relative">
        <Image
          className="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover"
          src={property.imageUrl}
          width={600}
          height={500}
          alt=""
        />
      </div>
      <div className="relative px-4 -mt-16">
        <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
          <div className="flex items-baseline">
            <span className="inline-block px-2 py-1 leading-none bg-blue-100 text-blue-900 rounded-full font-bold uppercase tracking-wide text-xs">
              Plus
            </span>
            <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
              {`${property.sections} ${
                property.sections === 1 ? "section" : "sections"
              } `}
              &bull;
              {` ${property.lectures} ${
                property.lectures === 1 ? "lecture" : "lectures"
              }`}
            </div>
          </div>
          <h4 className="mt-1 text-gray-900 font-semibold text-lg">
            {property.title}
          </h4>
          <div className="mt-1">
            <span className="text-gray-900 text-xl">
              {formattedPrice(property.price)}
            </span>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-600">
            {[1, 2, 3, 4, 5].map((element) => (
              <svg
                key={element}
                className={`${
                  property.rating >= element ? "text-teal-500" : "text-gray-400"
                } h-4 w-4 fill-current`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
              </svg>
            ))}
            <span className="ml-2">{property.reviewCount} reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
