import Head from "next/head";
import Frame from "../components/Frame";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Kazin&apos;s Beach Resort</title>
      </Head>
      <Frame
        featureImage="/assets/images/featured/hero-4.jpg"
        heroTitle="KNOW MORE ABOUT OUR HISTORY"
        pageTitle="ABOUT US"
      >
        <section>
          <div className="flex h-fit w-full justify-center lg:h-screen">
            <div className="flex h-full max-w-md flex-col items-center justify-center space-y-8 text-center text-xl font-light leading-loose">
              <h1 className="text-3xl font-light tracking-[.2em] lg:text-center">
                ABOUT US
              </h1>
              <p>
                Located at Barangay Culasi, Lonoy, Sapian, Capiz. Come and be
                part of your very special day, vacation mood, holidays, and many
                more! Kazin&apos;s Beach Resort gives you the best service that
                satisfies your needs.
              </p>{" "}
              <p>
                Kazin&apos;s Beach Resort was founded on September 2019, owned
                and managed by Mr. Orlando Ocado and family.
              </p>
            </div>
          </div>
        </section>
      </Frame>
    </>
  );
};

export default About;
