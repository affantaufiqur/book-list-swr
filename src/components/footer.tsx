export default function Footer() {
  return (
    <div className="py-12">
      <div className="flex flex-row justify-between container mx-auto">
        <div className="flex flex-row space-x-4">
          <p>image</p>
          <div className="flex flex-col space-y-1">
            <h1 className="font-medium text-lg">Bookoe</h1>
            <h4 className="font-normal text-sm">Rekomendasi bukumu</h4>
          </div>
        </div>
        <div className="max-w-[672px]">
          <p className="text-lg font-normal text-gray-800 tracking-wide leading-normal w-auto text-wrap">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-gray-200 w-full my-8" />
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Copyright 2023 Codemasters.id | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
