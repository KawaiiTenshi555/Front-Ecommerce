import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <>
      <Layout>
        <section className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10 flex items-center justify-center">
          


            <div className="w-full px-8 lg:w-1/2 xl:w-5/12 justify-center">
              <div className="relative p-8 bg-white rounded-lg shadow-md shadow-red-700 sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Phone"
                  />
                  <ContactTextArea
                    row={6}
                    placeholder="Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full p-3 text-red-700 transition border rounded border-primary bg-primary hover:bg-opacity-90 hover:border-red-700"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }: { row: number, placeholder: string, name: string, defaultValue: string }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none hover:border-red-700"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }: { type: string, placeholder: string, name: string }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none hover:border-red-700"
        />
      </div>
    </>
  );
};