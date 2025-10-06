import React, { useState } from "react";



export default function CreateCommunityModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState<File | null>(null);
  const [icon, setIcon] = useState<File | null>(null);

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBanner(e.target.files[0]);
    }
  };

  const handleIconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIcon(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (banner) formData.append("banner", banner);
    if (icon) formData.append("icon", icon);

    fetch("http://localhost:8080/api/v1/communities-creation", {
      method: "POST",
      body: formData
    })
    .then((res) => res.text())
    .then((message) => {
      console.log(message);  
      alert(message);        
    })
    .catch((err) => console.error("Error:", err))
    .finally(() => onClose());
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg w-[400px] p-6 text-black">
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4">Create a Community</h2>
            <input
              className="border p-2 w-full mb-3 rounded text-black"
              placeholder="Community Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="border p-2 w-full mb-3 rounded text-black"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4">Add Community Style</h2>

            <div className="mb-3">
              <label className="block font-medium">Banner</label>
              <input type="file" onChange={handleBannerUpload} className="text-black" />
              {banner && <p className="text-sm">{banner.name}</p>}
            </div>

            <div className="mb-3">
              <label className="block font-medium">Icon</label>
              <input type="file" onChange={handleIconUpload} className="text-black" />
              {icon && <p className="text-sm">{icon.name}</p>}
            </div>

            <button
              className="bg-green-500 text-white px-4 py-2 rounded w-full"
              onClick={handleSubmit}
            >
              Create Community
            </button>
          </>
        )}
      </div>
    </div>
  );

}
