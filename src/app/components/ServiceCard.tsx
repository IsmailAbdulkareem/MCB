import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from './WhatsAppButton';

interface Service {
  name: string;
  slug: string;
  image: string;
  whatsapp: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex justify-between items-center">
          <Link
            href={`/services/${service.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Learn More
          </Link>
          <WhatsAppButton
            phoneNumber={service.whatsapp.replace('https://wa.me/', '')}
            serviceName={service.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 