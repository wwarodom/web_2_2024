import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>  
        <h1 className="text-2xl text-yellow-800">Hello</h1>
        <div className="flex justify-between">
          <Image src="./next.svg" width={200} height={200} alt="Next.js logo" />
          <Image src="https://computing.psu.ac.th/th/wp-content/uploads/2023/09/PSU-CoC-ENG_01_x49.png" width={200} height={200} alt="Next.js logo" />
        </div>
        <p className="bg-blue-100 shadow-xl mt-8 p-4 rounded-lg border-2 border-blue-900">
          Lorem ipsum dolor sit amset consectetur adipisicing elit. Obcaecati, neque.
        </p>
        <p className="bg-blue-100 shadow-lg mt-4 p-4 rounded-lg border-2 border-blue-900">
          Lorem ipsum dolor sit amset consectetur adipisicing elit. Obcaecati, neque.
        </p> 

        <br />
        <Link href="/cat" className="hover:underline" >Cat</Link>
    </>

  );
}
