import image from '../../../assets/images/website-development.svg';
import icon from '../../../assets/images/section-service-icon.svg';
import { VIMEO_VIDEOIDS } from '../../../constants/vimeo-videoids';

export const websiteDevelopmentSection = {
  title: 'DAO Builder™',
  colorCode: '#9c47ed',
  useColor: true,
  buttonText: 'Get a Quote',
  buttonLink: '/website-development',
  features: [],
  description:
    'Build a great website in under an hour with DEI®. Our WordPress Hosting includes automatic setup, backups, and software upgrades, plus 24/7 support. Get started in just a few clicks.',
  image,
  icon,
  imageAlign: 'left',
  services: [
    {
      id: 'wd-one',
      target: '_blank',
      title: 'Website Builder',
      link: 'https://www.deiportal.com/products/website-builder',
      description:
        'Need a website but don`t know how? We can help. Get over your mental blocks. In no time, you`ll see how easy we made it..',
    },
    {
      id: 'wd-two',
      target: '_blank',
      title: 'Wordpress',
      link: 'https://www.deiportal.com/products/wordpress',
      description:
        'Create a fully managed WordPress site in a few clicks. Start up in minutes. Our WordPress specialists provide 24/7 uptime and support.',
    },
    {
      id: 'wd-three',
      target: '_blank',
      title: 'Shopping Cart',
      link: 'https://www.deiportal.com/products/wordpress',
      description:
        'This custom-built cart ensures secure transactions, consumer privacy, and marketing advantages for your business. E-commerce WordPress.',
    },
    {
      id: 'wd-four',
      target: '_self',
      title: 'Custom Built Sites',
      link: '/website-development',
      description: 'Every business is unique. That`s why we customize your website. We discover your business function to develop a site with the necessary functionality. Discover before all!',
    },
    {
      id: 'wd-five',
      target: '_self',
      title: 'DAO Builder™️',
      link: '/dao-builder',
      description: 'Keeping your business logistics private while providing transparency to sentinels club members adds security and efficiency.',
    },
  ],
  isShowMore: false,
  buttonColor: '#fff',
  isHideButton: true,
  isShowVideo: true,
  vimeoVideoId: VIMEO_VIDEOIDS.DAO_D_APP_VIDEO_ID,
};
