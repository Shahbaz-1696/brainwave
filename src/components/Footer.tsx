import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10" crosses id="footer">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          &#169; {new Date().getFullYear()}. All Rights Reserved
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((icon) => (
            <a
              key={icon.id}
              href={icon.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={icon.iconUrl} width={16} height={16} alt={icon.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
