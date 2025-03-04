import Image from "next/image";
import { useState } from "react";

export default function Avatar() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center min-w-50 w-fit p-1 bg-base-100 rounded-full">
      <div className="flex-grow px-4">Hi, Amy!</div>
      {!imageError ? (
        <div className="avatar">
          <div className="w-18 rounded-full">
            <Image
              alt="Profile"
              width={96}
              height={96}
              src="/customers/amy-burns.png"
              onError={(err) => {
                console.log("err", err);
                setImageError(true);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-18 rounded-full">
            <span className="text-3xl">LR</span>
          </div>
        </div>
      )}
    </div>
  );
}
