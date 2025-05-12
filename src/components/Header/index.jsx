import Image from "next/image";

export default async function Header({ imageUrl }) {
  return (
    <>
      <Image
        src={imageUrl}
        alt="国旗"
        width={100}
        height={60}
        unoptimized
      ></Image>{" "}
    </>
  );
}
