import Image from "next/image";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      <Image height="60" width="60" alt="Kazoku-Retreat logo" />
      <span className="text-xl font-semibold text-primary-100">
        Kazoku-Retreat
      </span>
    </a>
  );
}

export default Logo;
