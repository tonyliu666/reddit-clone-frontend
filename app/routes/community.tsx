import { useLocation, useParams } from "react-router-dom";

export default function CommunityPage() {
  const { communityName } = useParams();
  const location = useLocation();
  const { iconImageBytes, bannerImageBytes, description } = location.state || {};

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-48 bg-gray-200">
        {bannerImageBytes ? (
          <img
            src={`data:image/png;base64,${bannerImageBytes}`}
            alt="Community banner"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}

        <div className="absolute bottom-[-32px] left-8 flex items-center">
          {iconImageBytes ? (
            <img
              src={`data:image/png;base64,${iconImageBytes}`}
              alt="Community icon"
              className="w-16 h-16 rounded-full border-4 border-white object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full border-4 border-white bg-gray-200" />
          )}
        </div>
      </div>

      <div className="mt-10 ml-8">
        <h1 className="text-2xl font-bold">r/{communityName}</h1>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
