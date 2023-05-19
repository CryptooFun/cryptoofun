import Image from 'next/image';
import Link from 'next/link';

function HeaderLink({ name, href, icon }) {
  return (
    <Link href={href} className="p-2 font-semibold text-white">
      <span className="max-lg:hidden">{name}</span>
      <Image
        className="mx-2 inline-block"
        src={icon}
        alt={name}
        width={20}
        height={20}
      />
    </Link>
  );
}

export default HeaderLink;
