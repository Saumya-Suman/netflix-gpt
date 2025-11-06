const VideoTitle = ({title, overview} ) => {
  return (
    <div className="top-0 left-0 w-full h-full px-20 pt-[20%] text-white z-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}|</p>
      <div className="space-x-4 cursor-pointer">
        <button className="bg-white text-xl text-black rounded-lg p-4 px-12 hover:bg-opacity-80">▶ Play</button>
        <button className="bg-gray-500 bg-opacity-75 text-white text-xl rounded-lg p-4 px-16">ℹ More Info</button>
      </div>
    </div>
  );
};
export default VideoTitle;
