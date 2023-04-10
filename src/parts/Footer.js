import BrandIcon from "parts/BrandIcon";
import Button from "elements/Button";

const Footer = () => {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />

            <p className="w-full text-lg text-gray-400 font-light">
              Growing Your Business <br />
              Is Our Calling
            </p>
          </div>

          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Office</h1>

            <p className="text-lg text-gray-400 font-light">
              digitsthirty@gmail.com
            </p>

            <p className="text-lg text-gray-400 font-light">Palestine, Gaza</p>
          </div>

          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Social</h1>
            <Button
              href="https://www.instagram.com/thirtydigits/"
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              Instagram
            </Button>

            <Button
              href="https://www.twitter.com/thirtydigits/"
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              Twitter
            </Button>

            <Button
              href="https://wa.me/970599995488"
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              WhatsApp
            </Button>

            <Button
              href="mailto:digitsthirty@gmail.com"
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              Gmail
            </Button>
          </div>
        </div>

        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light capitalize">
            Copyright {new Date().getFullYear()} - All rights reserved -{" "}
            <span className="text-theme-blue font-medium">
              <span className="text-theme-purple">thirty</span>
              Digits
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
