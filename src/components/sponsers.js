import Image from "next/image"
export default function SponsersPage() {

  return (
      <div class="flex flex-col place-items-center my-20">
        <h2 class="w-full  text-center md:text-6xl text-4xl font-Minecraft uppercase text-black  tracking-widest">
          Our Premium Sponsors
        </h2>
        <div class="max-w-7xl mx-auto flex flex-wrap justify-around gap-16 my-12 px-4">

          <div class="flex flex-col justify-center gap-12">
            <div class="md:text-7xl text-3xl mt-6 font-bold text-[#FFD700] font-Space-Grotesk text-center">
              Gold Sponsors
            </div>
            <div class="flex flex-row flex-wrap  justify-center md:gap-8 gap-6">
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-16 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-16 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-16 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-16 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-center gap-8">
            <div class="md:text-6xl text-3xl font-bold font-Space-Grotesk text-center text-[#C0C0C0]">
              Silver Sponsors
            </div>
            <div class="flex flex-row flex-wrap  justify-center md:gap-8 gap-6">
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-12 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-12 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-12 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-12 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-center gap-8">
            <div class="md:text-5xl text-3xl font-bold font-Space-Grotesk text-center text-[#CD7F32]">
              Bronze Sponsors
            </div>
            <div class="flex flex-row flex-wrap  justify-center md:gap-8 gap-6">
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-9 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-9 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-9 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
              <div class="flex items-center  justify-center hover:opacity-60" >
                <Image src="/SponserLogos/logo.svg" alt="google" class="h-9 hover:text-gray-500 dark:hover:text-white" width={200} height={200} />
              </div>
            </div>
          </div>


        </div>
      </div>
  )
}