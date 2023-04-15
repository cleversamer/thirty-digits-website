import Fade from "react-reveal/Fade";
import * as emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "elements/Form";
import Button from "elements/Button";

const DiscussForm = ({ data, resetForm, onChange }) => {
  const submitEmail = () => {
    const { name, company, email, phone, projectIdea } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: "Racxstudio",
      message: projectIdea,
    };

    if (
      name !== "" &&
      company !== "" &&
      email !== "" &&
      phone !== "" &&
      projectIdea !== ""
    ) {
      emailjs
        .send(
          "service_h4gtndg",
          "template_a9tvs7a",
          templateParams,
          "user_csqIxzN5mKsl1yw4ffJzV"
        )
        .then(
          () => {
            toast.success("Success! we'll get back to you soon. Thank you!");
            resetForm();

            setTimeout(() => {
              const whatsAppURL =
                "https://api.whatsapp.com/send/?phone=970599995488&text&type=phone_number&app_absent=0";

              window.open(whatsAppURL, "_blank");
            }, 2000);
          },
          (error) => {
            toast.error(error);
          }
        );
    } else {
      toast.error("Please fill out the blank form.");
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">
      <Fade bottom>
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Let's Discuss
        </h1>

        <p className="font-light text-lg text-gray-400 text-center mb-12 px-5">
          Please fill out the form below to discuss your project and we'll get
          back to you in less than 24 hours.
        </p>

        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              onChange={onChange}
            />

            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              onChange={onChange}
            />

            <Form
              id="phone"
              name="phone"
              type="tel"
              value={data.phone}
              placeholder="Your contact number"
              onChange={onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain about your project idea"
              onChange={onChange}
            />
          </div>

          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />
    </section>
  );
};

export default DiscussForm;
