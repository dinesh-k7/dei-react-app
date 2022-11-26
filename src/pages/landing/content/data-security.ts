import image from '../../../assets/images/data-security.svg';
import icon from '../../../assets/images/section-service-icon.svg';
import { VIMEO_VIDEOIDS } from '../../../constants/vimeo-videoids';

export const dataSecuritySection = {
  title: 'Data Security',
  colorCode: '#42B9F8',
  buttonText: 'Get a Quote',
  useColor: true,
  features: [],
  description:
    'The DEI®️ proactive approach can help you create and maintain a digital entity based on world class cybersecurity standards and practices. Until now, no clear solution has been made available.',
  image,
  icon,
  imageAlign: 'left',
  services: [
    {
      id: 'data-security-two',
      target: '_self',
      title: 'Data Sentinels™️',
      link: '/data-sentinels',
      description:
        'DEI Data Sentinels™ monitors the dark web. Our stack includes credential exposure data, email security solutions, and class 1 cybersecurity training at one low price.',
    },
    {
      id: 'data-security-three',
      target: '_self',
      title: 'Site Sentinels™',
      link: '/site-sentinels',
      description:
        'Including fully managed SSL Certificates, Website Security, Backups, and a $1 million warranty. Our Security Stack, Data Sentinels™, and Site Sentinels™ create synergistic security.',
    },
    {
      id: 'data-security-four',
      target: '_self',
      title: 'Sentinels Club™',
      link: '/sentinels-club',
      description:
        'Help build the network of the future by joining the sentinels club™. Together, we pledge to nondiscriminatory hiring and pay practices. DEI® Sentry Stack, Compliance Central, Secure Backup, VSA - Managed Services, and DAO registration make the world`s most secure network.',
    },
    {
      id: 'data-security-one',
      target: '_self',
      title: 'Compliance Central',
      link: '/compliance-central',
      description:
        'DEI® Compliance Central is a simple tool that delivers the cybersecurity architecture you need. A data compliance engine supports PCI, NIST, HIPPA, GDPR, Etc. We help you with data compliance.',
    },
    {
      id: 'data-security-nine',
      target: '_self',
      title: 'DEI®️ VSA',
      link: 'enterprise/dei-vsa',
      description:
        'DEI® Remote Monitoring & Management supports large and small endpoints, from servers to applications. We offer affordable remote management services for virtual machines, cloud services, and physical devices.',
    },
    {
      id: 'data-security-five',
      target: '_self',
      title: 'DEI® Secure Backup',
      link: '/enterprise/dei-backup',
      description:
        'After a natural disaster, it`s vital to get your systems back online immediately. Our DEI® Secure Backup delivers fast system recovery.',
    },
    {
      id: 'data-security-six',
      target: '_blank',
      title: 'DEI® Newsletter',
      link: 'https://novusordoseclorum.org/newsletter',
      description:
        'DEI`s newsletter updates security professionals on today`s dangers. Discover issues you may not know about and how to protect clients and employees. Join our newsletter here.',
    },
    // {
    //   id: 'data-security-seven',
    //   target: '_self',
    //   title: 'Cyber Security',
    //   link: '/enterprise/cyber-security',
    //   description: 'The DEI® understands that cyber security is intentionally complex. Our experts have experience in Network Security and Secure Access, ID Management, Data Security, Site Security and more. Our customizable solution enabling Information Protection, Reduces Vulnerability, Deepens visibility and control with Simple Implementation is designed to meet every customers security needs.',
    // },
    {
      id: 'data-security-seven',
      target: '_self',
      title: 'Physical Security',
      link: '/enterprise/physical-security',
      description:
        'Physical security has multiple deterrents. Fencing, gates, access control, physical barriers, and monitoring/detection systems. It`s available.',
    },
  ],
  count: 6,
  isShowMore: true,
  isHideButton: true,
  isShowVideo: true,
  vimeoVideoId:VIMEO_VIDEOIDS.DATA_SECURITY_VIDEO_ID
  

};
