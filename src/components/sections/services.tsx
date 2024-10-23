import Accordion from "../blocks/accordion";

const Services = () => {
  return (
    <div className="bg-black">
      <div className="border-b py-12 border-white flex justify-start items-center">
        <p className="text-white text-2xl section-h-padding">Services</p>
      </div>
      <Accordion title="Web Development" description="With 6 years of experience working across industries and collaborating with top creative agencies and global brands, I specialize in turning complex designs into seamless digital experiences. Whether you need a high-performance React or Next.js app, a custom Shopify or Webflow build, or a polished WordPress or Squarespace site, I've worked with it all." />
      <Accordion title="Design" description="Need a captivating design for your website? I collaborate with top-tier designers to create modern, engaging web experiences tailored to your brand vision. Using Figma, we design with precision, ensuring every detail shines across all screen sizes for a seamless, responsive experience. Whether you need a sleek refresh or a bold new concept, we'll bring your ideas to life with creativity and expertise." />
      <Accordion title="Consulting" description="I offer consulting services to help businesses streamline development workflows, choose the right technologies, and bring ambitious ideas to life. With hands-on experience across various industries and platforms—like React, Next.js, Shopify, and Webflow—I provide actionable insights and tailored strategies. Whether you need help scoping a project, optimizing performance, or navigating complex builds." />
    </div>
  );
};

export default Services;