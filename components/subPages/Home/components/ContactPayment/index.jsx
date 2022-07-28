import ContactFeature from "./ContactFeature";
import serviceInfo from "../../utils/serviceInfo.json";

const ContactPayment = () => {
  return (
    <div className="container mt-28">
      <div className="grid grid-cols-1 smd:grid-cols-2 xl:grid-cols-4 gap-8">
        {serviceInfo?.map((service) => {
          return <ContactFeature key={service.id} {...service} />;
        })}
      </div>
    </div>
  );
};

export default ContactPayment;
