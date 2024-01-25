import React from "react";
import Hackmol from "../hero/img";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-center md:justify-around bg-black justify-items-center text-white w-full p-6">
      <div className="hidden md:block">
        <div className="flex gap-x-2">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc0IiBoZWlnaHQ9IjkwIiB2aWV3Qm94PSIwIDAgMTc0IDkwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBpZD0iR0RTQyBMb2dvIj4KPHBhdGggZD0iTTQxLjQwNSA0NS4xNjUzTDY5LjY0MzUgMjcuOTI2OEM3Ni4yOTA0IDIzLjg3MTUgNzguNTU4NyAxNC44ODAxIDc0LjcyNTYgNy44NDc5N0M3MC44OTI1IDAuODE1ODUyIDYyLjM5MzcgLTEuNTgzODkgNTUuNzQ2OCAyLjQ3MTM1TDYuOTUwMjggMzIuMjcwNkw0MS40MDUgNDUuMTY1M1oiIGZpbGw9IiNFQTQzMzUiLz4KPHBhdGggZD0iTTYyLjY3NiA4OS41QzY3LjQ3MSA4OS41IDcyLjE1MTEgODYuODU3MiA3NC43MjA4IDgyLjE0ODlDNzguNTUzOSA3NS4xMTY4IDc2LjI4NTYgNjYuMTI1NCA2OS42Mzg3IDYyLjA3MDJMMjAuODQyMiAzMi4yNzFDMTQuMTk1MyAyOC4yMTU3IDUuNjk2NDUgMzAuNjE1NCAxLjg2MzM2IDM3LjY0NzZDLTEuOTY5NzMgNDQuNjc5NyAwLjI5ODU1IDUzLjY3MTEgNi45NDU0NSA1Ny43MjY0TDU1Ljc0MiA4Ny41MjU2QzU3LjkzODUgODguODYyMSA2MC4zMjE2IDg5LjUgNjIuNjc2IDg5LjVaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0xMTEuMjE2IDg5LjQ5ODlDMTEzLjU3MSA4OS40OTg5IDExNS45NTQgODguODYxIDExOC4xNSA4Ny41MjQ0TDE2Ni45NDcgNTcuNzI1M0wxMzIuOTM3IDQ0LjU1N0wxMDQuMjY4IDYyLjA2OTFDOTcuNjIxIDY2LjEyNDMgOTUuMzM4MyA3NS4xMTU3IDk5LjE4NTggODIuMTQ3OEMxMDEuNzQxIDg2Ljg1NjEgMTA2LjQyMSA4OS40OTg5IDExMS4yMTYgODkuNDk4OVoiIGZpbGw9IiNGQkJDMDQiLz4KPHBhdGggZD0iTTE1OS45OCA1OS43MDAyQzE2NC43NzUgNTkuNzAwMiAxNjkuNDU1IDU3LjA3MjYgMTcyLjAyNSA1Mi4zNDkxQzE3NS44NTggNDUuMzE3IDE3My41OSAzNi4zMjU3IDE2Ni45NDMgMzIuMjcwNUwxMTguMTQ2IDIuNDcxMzRDMTExLjQ5OSAtMS41ODM4OCAxMDMgMC44MTU4NTIgOTkuMTY3MyA3Ljg0Nzk1Qzk1LjMzNDIgMTQuODggOTcuNjAyNCAyMy44NzE1IDEwNC4yNDkgMjcuOTI2N0wxNTMuMDQ2IDU3LjcyNThDMTU1LjIyOCA1OS4wNjIzIDE1Ny42MjYgNTkuNzAwMiAxNTkuOTggNTkuNzAwMloiIGZpbGw9IiMzNEE4NTMiLz4KPC9nPgo8L3N2Zz4K" // Path to your image
            alt=""
            width={69.088}
            height={37.049}
          />
          <div className="flex flex-col font-Poppins">
            <h1 className="font-semibold text-2xl">GDSC</h1>
            <h2 className="font-normal text-lg">NIT Jalandhar</h2>
          </div>
        </div>
      </div>
      <div className="">
        <Hackmol />
      </div>
      <div className="hidden md:block">
        <button onClick={() => window.open("https://hackmol-5.devfolio.co/","_blank")}>
          <div className="relative">
            <img
              className="w-full h-full"
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAABICAYAAAB2miDXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANZSURBVHgB7d0/aBNRHMDxX4w418EpEC1kCHaRToIgQiEgiJQijg4ugiIdHDsLLg4Org6OolJFEAqCCIKLVQRFpFgNFAcHFwWR1jQJl+T+vHv3LvfnlzbfDxzJ5V5KyeXH773fe3epSHodAWBSSdP4gABQkSpSPWQ+IFlibJH5ACUHU7SNZLz7P2+Iq/WdTevx9tZHmSb12lzktbjPwNR2ryv6fBf5mc1XZ2OPXTpyW1yR+QAlaTJf39Lb6wIgu9TBB8CJf5hmLL7Q7QSU2DIfUwpAgWxzEcPgi6tqrrb/xbx1TQBNWtVOP1/l0xhn4cxHtsO+UORURlsGf7s1fG2xfsj2lnBc9YORggtQkHCPMTwHaAw+phOA4lHtBJT0Ml+GcR6FFUwz//f/nKQV6XaaKpvmqiaBB4ypn/AouAA5WG0/856NKqDbb/5Y38OYD1DimPnoYgJ5I/MBSgg+QEmk23nrypNIo+ZKVQC48A/RTllbkvkAJQQfoITgA5QQfIASgg9QQvABSiJTDY2F04ZmrwVAvsh8gBKuagAKsvHilfU4mQ9QQvABSgg+QAnBBygh+AAlBB+ghOADlBB8gBKCD1BC8AFKIsvLTEtimie5hwuQNzIfoITgA5Q4XdWwWI/+Asvo3vQAxkHmA5T0gq8iAEo39sW0pq6oze/OX/ny/0fs8fnqrLhY39l0en9cO1drVz8E9rlr917TCuzVa1uBfdfvm4uHD34ZX28sBPc/Pd4I7HMle0nqtTnBSJYv/375SQOnGyiZIvvCxcMCYCz9oR6Zb2ythOP8piHsBsWWzuCF83cvC6LCK3+aK2et7cNjjK+PZgTFSTo/k3A+nl67N3jajzumGgAlBB+gJDLm86VGuqBARv54CqPg4ihcBf5887m1/bbxtvsoStL5Ket8GK4KutPdlk1tB8HnX+XSEQB5WY47QOYDyhNYyknBBVBiWlQ97HYeX2oEDjQYxwBD4fFdeO2mAZkPmAQEH6AkVcHFdHMluqJALOu1smQ+QEnmqYakX98EYJZ0C4nECfdwRRSYVoZqJ91OYBIldTttkcsyNEyVtPN4Sch8gJIstw0k8wEZYqjshdW9f/RMdzvR3Y55jzPedlSAcnz3Ht93t2/e9rK7vZMS7QI6Vp/BeES8YQAAAABJRU5ErkJggg=="
              }
            />
            <h1 className="font-Minecrafter text-2xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-3/4">
              Register
            </h1>
          </div>
        </button>
      </div>
    </div>
  );
}
