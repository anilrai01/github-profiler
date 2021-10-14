export default function Spinner({ visStat }) {
  if (!visStat) return null;

  return (
    <div className="absolute bg-white w-screen h-screen flex justify-center items-center z-20">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
}
