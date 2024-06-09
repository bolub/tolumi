import { roboto_mono } from "@/fonts";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-12 bg-cover bg-center bg-no-repeat bg-black/20 bg-blend-multiply text-white text-center"
      style={{
        backgroundImage: "url(./cover.png)",
      }}
    >
      <div className="m-auto w-full max-w-[1100px] flex flex-col items-center">
        <h1 className="uppercase font-extrabold text-xl tracking-[2px]">
          Tolumi
        </h1>

        <p
          className={`${roboto_mono.className} text-4xl md:text-9xl mt-8 md:mt-20 leading-loose`}
        >
          We will be back soon
        </p>

        <p className="text-lg md:text-3xl max-w-[650px] mt-5 md:mt-20 font-light tracking-wide">
          We are currently making big changes in our brand and will be back with
          a fresh new Tolumi TFP
        </p>
      </div>
    </main>
  );
}
