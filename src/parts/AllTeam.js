import Fade from "react-reveal/Fade";

const AllTeam = ({ data }) => {
  return (
    <section className="container mx-0 sm:mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-32 sm:gap-14 lg:gap-10 mx-16 justify-items-center">
        {data.map((item, index) => (
          <Fade key={index} bottom delay={200 * index}>
            <a href={item.socialUrl} target="_blank" rel="noreferrer">
              <div className="flex flex-col w-44 h-60 sm:w-56 sm:h-72 rounded-xl shadow-xl border border-light-theme-purple justify-center transform transition duration-500 hover:scale-105">
                <div className="flex justify-center xl:mb-5">
                  <img
                    src={item.imageUrl}
                    alt={`${item.name} ${item.position} at Thirty Digits`}
                    className="flex w-32 h-32 rounded-full object-cover"
                  />
                </div>

                <h2 className="text-theme-blue text-center text-xl">
                  {item.name}
                </h2>

                <p className="font-light text-gray-400 text-center mb-3">
                  {item.position}
                </p>
              </div>
            </a>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default AllTeam;
